'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const TOTAL_FRAMES = 240
const FRAME_PATH = (i: number) =>
  `/landing page final frames/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)
  const floatingCtaRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    // Size canvas to CSS size (no DPR scaling — simpler and always works)
    const sizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    sizeCanvas()
    window.addEventListener('resize', sizeCanvas)

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Preload all frames
    const frames: HTMLImageElement[] = Array(TOTAL_FRAMES)
    let loadedCount = 0

    const drawFrame = (index: number) => {
      const img = frames[index]
      if (!img || !img.complete || img.naturalWidth === 0) return

      const cw = canvas.width
      const ch = canvas.height
      if (cw === 0 || ch === 0) return

      const ir = img.naturalWidth / img.naturalHeight
      const cr = cw / ch

      let dw: number, dh: number, dx: number, dy: number
      if (ir > cr) {
        dh = ch; dw = dh * ir; dx = (cw - dw) / 2; dy = 0
      } else {
        dw = cw; dh = dw / ir; dx = 0; dy = (ch - dh) / 2
      }

      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, dx, dy, dw, dh)
    }

    let currentFrame = 0
    let rafId: number | null = null
    let isAnimating = false

    const updateOverlay = (progress: number) => {
      if (overlayRef.current) {
        const fadeOut = Math.max(0, Math.min(1, (progress - 0.15) / 0.20))
        const ty = -30 * fadeOut
        overlayRef.current.style.opacity = String(1 - fadeOut)
        overlayRef.current.style.transform = `translateY(${ty}px)`
      }
      if (scrollHintRef.current) {
        scrollHintRef.current.style.opacity = String(Math.max(0, 1 - progress / 0.10))
      }
      if (floatingCtaRef.current) {
        // Fade in floating CTA at the very end of the animation (last 15%)
        const fadeIn = Math.max(0, Math.min(1, (progress - 0.85) / 0.15))
        floatingCtaRef.current.style.opacity = String(fadeIn)
        floatingCtaRef.current.style.pointerEvents = fadeIn > 0.5 ? 'auto' : 'none'
      }
    }

    const animateFrames = (forward: boolean) => {
      if (isAnimating) return
      isAnimating = true
      
      const target = forward ? TOTAL_FRAMES - 1 : 0
      let lastTime: number | null = null
      let exactFrameFloat = currentFrame

      const loop = (time: number) => {
        if (lastTime === null) lastTime = time
        const dt = time - lastTime
        lastTime = time

        const framesToAdvance = dt / (1000 / 60)

        if (forward) {
          exactFrameFloat += framesToAdvance
          if (exactFrameFloat >= target) exactFrameFloat = target
        } else {
          exactFrameFloat -= framesToAdvance
          if (exactFrameFloat <= target) exactFrameFloat = target
        }

        currentFrame = Math.round(exactFrameFloat)
        drawFrame(currentFrame)
        updateOverlay(currentFrame / (TOTAL_FRAMES - 1))

        if ((forward && exactFrameFloat < target) || (!forward && exactFrameFloat > target)) {
          rafId = requestAnimationFrame(loop)
        } else {
          isAnimating = false
          rafId = null
          
          if (container) {
            const heroTop = container.offsetTop
            const heroBottom = heroTop + container.offsetHeight - window.innerHeight
            
            if (forward) {
              if (window.scrollY < heroBottom) {
                window.scrollTo({ top: heroBottom, behavior: 'auto' })
              }
            } else {
              if (window.scrollY > heroTop) {
                window.scrollTo({ top: heroTop, behavior: 'auto' })
              }
            }
          }
        }
      }

      rafId = requestAnimationFrame(loop)
    }

    const handleWheel = (e: WheelEvent) => {
      const heroTop = container.offsetTop
      const heroBottom = heroTop + container.offsetHeight - window.innerHeight
      const inHero = window.scrollY >= heroTop && window.scrollY <= heroBottom + 5
      
      if (isAnimating) {
        if (inHero && e.cancelable) e.preventDefault()
        return
      }
      
      const threshold = 10
      if (Math.abs(e.deltaY) > threshold && inHero) {
        if (e.deltaY > 0) {
          if (currentFrame < TOTAL_FRAMES - 1) {
            if (e.cancelable) e.preventDefault()
            animateFrames(true)
          }
        } else {
          if (currentFrame > 0 && window.scrollY <= heroBottom) {
            if (e.cancelable) e.preventDefault()
            animateFrames(false)
          }
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    // Load all frames; draw frame 0 as soon as it loads
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image()
      img.onload = () => {
        frames[i] = img
        loadedCount++
        if (i === 0) drawFrame(0)
        // Re-draw if this is the currently displayed frame
        if (i === currentFrame) drawFrame(i)
      }
      img.src = FRAME_PATH(i)
      frames[i] = img
    }

    // Run once to initialize
    updateOverlay(0)

    return () => {
      window.removeEventListener('resize', sizeCanvas)
      window.removeEventListener('wheel', handleWheel)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  const scrollToContact = () => {
    const target = document.querySelector('#contact')
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section aria-label="Hero" ref={containerRef} id="hero-canvas-container">
      {/* Sticky Canvas */}
      <canvas
        ref={canvasRef}
        id="hero-canvas"
        aria-hidden="true"
        style={{ background: '#0f172a' }}
      />

      {/* Overlay — visible immediately, fades out on scroll */}
      <div
        ref={overlayRef}
        className="hero-overlay"
        style={{ opacity: 1, transform: 'translateY(0px)', transition: 'opacity 0.25s ease, transform 0.35s ease' }}
      >
        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white text-center leading-[1.1] tracking-tight px-4 max-w-5xl mx-auto"
          style={{ textShadow: '0 4px 32px rgba(0,0,0,0.5)' }}
        >
          <span className="block text-4xl sm:text-5xl mb-2">🌤</span>
          Power Your Future
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            with Solar Energy
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-5 text-base sm:text-lg text-white/80 text-center max-w-2xl mx-auto px-4 leading-relaxed"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
        >
          India&apos;s most trusted solar energy solutions for homes, businesses,
          and industries. Cut your electricity bill by up to 90%.
        </p>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {[
            { value: '5000+', label: 'Installations' },
            { value: '50MW+', label: 'Capacity Installed' },
            { value: '15+',   label: 'Years Experience' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-solar-yellow" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
                {stat.value}
              </div>
              <div className="text-xs text-white/65 font-medium mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 sm:px-0 max-w-sm sm:max-w-none mx-auto pointer-events-auto"
        >
          <button onClick={scrollToContact} className="btn-primary w-full sm:w-auto text-base px-8 py-4 flex items-center justify-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Get Free Site Visit
          </button>
          <Link
            href="/login"
            className="btn-outline-white w-full sm:w-auto text-base px-8 py-4 flex items-center justify-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/>
              <line x1="15" y1="12" x2="3" y2="12"/>
            </svg>
            Login
          </Link>
        </div>

      </div>

      {/* Floating Image CTA Over Cloud */}
      <div className="sticky top-0 h-[100vh] w-full pointer-events-none z-20" style={{ marginTop: '-100vh' }}>
        <div 
          ref={floatingCtaRef}
          className="absolute top-[20%] left-1/2 -translate-x-1/2 md:top-[42%] md:left-[18%] md:-translate-x-1/2 md:-translate-y-1/2"
          style={{ opacity: 0, pointerEvents: 'none', transition: 'opacity 0.2s ease' }}
        >
          <div 
            className="animate-breath-cta flex flex-col items-center justify-center p-6 rounded-[14px] cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl"
            style={{
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}
            onClick={scrollToContact}
          >
            <img src="/cta-image.png" alt="Book Consultation" className="w-32 md:w-40 h-auto object-contain mb-4 drop-shadow-sm mix-blend-multiply" />
            <div className="bg-solar-yellow text-white font-bold tracking-wide text-sm md:text-base px-6 py-2.5 rounded-full shadow-md whitespace-nowrap">
              Book Free Consultation
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint — fixed to bottom of viewport, fades as user scrolls */}
      <div
        ref={scrollHintRef}
        style={{
          position: 'fixed',
          bottom: '28px',
          left: 0,
          right: 0,
          zIndex: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        <span style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.60)', fontWeight: 600 }}>Scroll Down</span>
        <svg className="animate-bounce" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>

    </section>
  )
}
