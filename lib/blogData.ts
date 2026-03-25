export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  content: string;
  keywords: string[];
  metaTitle: string;
  metaDesc: string;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "solar-panel-cost-india-2026",
    title: "Solar Panel Cost in India 2026: What You'll Actually Pay (After Subsidy)",
    excerpt:
      "A 3 kW residential system costs ₹1,20,000–₹1,80,000 after government subsidy. Here's how the numbers break down.",
    date: "2026-01-12",
    readTime: "9 min read",
    author: "Rohit Sharma",
    keywords: ["solar panel cost India", "3kw solar cost", "solar installation price 2026"],
    metaTitle: "Solar Panel Cost in India 2026: What You'll Actually Pay (After Subsidy)",
    metaDesc:
      "Understand rooftop solar pricing in India for 2026, including PM Surya Ghar subsidy, payback period, and what changes the final system cost.",
    content: `
      <p>When people ask, “How much does solar cost in India?”, they usually get one of two bad answers. The first is a number that is unrealistically low and ignores quality, subsidy rules, and installation conditions. The second is a broad range so wide that it is not useful for a real decision. The truth is simpler. In 2026, a good-quality residential rooftop solar system in India usually costs about ₹60,000 to ₹70,000 per kW before subsidy. For a typical 3 kW home system, that means a realistic all-in price of roughly ₹1.8 lakh to ₹2.1 lakh before any central support is applied.</p>
      <p>If you are planning for your own home, the smarter question is not just “What is the lowest quote?” It is “What will I actually pay after subsidy, and what am I getting for that money?” That is where most homeowners save or lose money. Cheap quotes often look attractive in a WhatsApp message, but they may hide lower-efficiency panels, weaker mounting structures, undersized inverters, or vague warranty support. Over 20 to 25 years, that false saving can cost far more than it appears.</p>

      <h2>The real cost before subsidy</h2>
      <p>For a quality on-grid system installed by a professional vendor, ₹60,000 to ₹70,000 per kW is the right planning range in most Indian cities. At the lower end, you may get standard panels, a basic inverter, and a straightforward RCC roof installation. At the higher end, you are paying for stronger panel brands, better inverter monitoring, improved cabling and protection, and more careful execution.</p>
      <p>Why are very cheap panels a false economy? First, degradation matters. A low-quality module may lose output faster, which means the system underperforms year after year. Second, efficiency matters. If your roof area is limited, every panel must do more work. Third, after-sales service matters. A long warranty on paper is useless if the installer disappears after six months. Good solar is not only hardware. It is correct design, safe earthing, proper structure, net meter compatibility, and support when there is an issue.</p>
      <p>That is why homeowners comparing quotes should ask the vendor to specify panel wattage, DCR compliance, inverter brand, structure material, surge protection, warranty terms, and whether subsidy paperwork is included. If you want a quick estimate before speaking to anyone, use the <a href="/solar-calculator">solar calculator</a> and compare the recommendation with your current monthly units.</p>

      <h2>PM Surya Ghar subsidy: what you actually get</h2>
      <p>The PM Surya Ghar Muft Bijli Yojana has made rooftop solar easier to justify for Indian households. The central subsidy is straightforward once you strip away the noise: ₹30,000 per kW for the first 2 kW and ₹18,000 for the third kW, with the central support capped at 3 kW for most residential calculations.</p>
      <table>
        <thead>
          <tr>
            <th>System size</th>
            <th>Illustrative full cost</th>
            <th>Central subsidy</th>
            <th>You pay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 kW</td>
            <td>₹65,000</td>
            <td>₹30,000</td>
            <td>₹35,000</td>
          </tr>
          <tr>
            <td>2 kW</td>
            <td>₹1,35,000</td>
            <td>₹60,000</td>
            <td>₹75,000</td>
          </tr>
          <tr>
            <td>3 kW</td>
            <td>₹2,10,000</td>
            <td>₹78,000</td>
            <td>₹1,32,000</td>
          </tr>
        </tbody>
      </table>
      <p>The 3 kW example is the one most families care about because it covers a large share of a normal urban household bill without demanding too much roof area. In plain terms: full cost ₹2,10,000, subsidy ₹78,000, final out-of-pocket cost ₹1,32,000. That is the number many homeowners should budget for if they want a dependable 3 kW rooftop system and not the cheapest possible components.</p>

      <h2>Cost by system size — with and without subsidy</h2>
      <p>Below is a practical planning table. Exact numbers vary by city, brand mix, and roof complexity, but these ranges are useful for budgeting.</p>
      <table>
        <thead>
          <tr>
            <th>System</th>
            <th>Before subsidy</th>
            <th>After subsidy</th>
            <th>Estimated monthly savings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 kW</td>
            <td>₹60,000–₹70,000</td>
            <td>₹30,000–₹40,000</td>
            <td>₹700–₹1,000</td>
          </tr>
          <tr>
            <td>2 kW</td>
            <td>₹1,20,000–₹1,40,000</td>
            <td>₹60,000–₹80,000</td>
            <td>₹1,400–₹2,000</td>
          </tr>
          <tr>
            <td>3 kW</td>
            <td>₹1,80,000–₹2,10,000</td>
            <td>₹1,02,000–₹1,32,000</td>
            <td>₹2,100–₹3,000</td>
          </tr>
          <tr>
            <td>5 kW</td>
            <td>₹3,00,000–₹3,50,000</td>
            <td>₹2,22,000–₹2,72,000</td>
            <td>₹3,500–₹5,000</td>
          </tr>
          <tr>
            <td>10 kW</td>
            <td>₹6,00,000–₹7,00,000</td>
            <td>₹5,22,000–₹6,22,000</td>
            <td>₹7,000–₹10,000</td>
          </tr>
        </tbody>
      </table>
      <p>A 5 kW or 10 kW system can make excellent financial sense for larger homes and small commercial users, but the subsidy no longer rises after 3 kW in the way many people expect. That is why sizing should be based on actual units consumed and future usage, not only on the desire to “maximize” the subsidy.</p>

      <h2>What affects the final price?</h2>
      <p>Four things typically move the final quote up or down. First is panel brand. Tier 1 or better-established Indian brands usually cost more, but their long-term output and support are more dependable. Second is inverter type. A standard on-grid inverter is the most economical option; a hybrid inverter costs more because it is ready for battery integration. Third is roof type. A clean RCC terrace is usually simple, while tiled, sloped, or older roofs need more structural care and labour. Fourth is state location. Logistics, DISCOM process quality, and local market conditions can change pricing slightly.</p>
      <p>There are also smaller cost drivers that many buyers miss: cable route length, lightning protection, access to the roof, and whether the main distribution board needs cleanup before solar can be connected safely. None of these are exciting, but they matter. A serious site survey is often the difference between a clean installation and a problematic one.</p>

      <h2>Is it worth it? The ROI in plain numbers</h2>
      <p>Let us take a simple household with a monthly bill of around ₹3,000. In many Indian cities, that home is a good fit for a 3 kW system. If the system offsets most of the daytime consumption and reduces net billing by around ₹2,200 to ₹2,500 a month, then a post-subsidy investment of about ₹1.32 lakh is often recovered in roughly five years. After that, the system keeps producing for decades with relatively low maintenance.</p>
      <p>Even if you assume conservative savings and gradual degradation, the long-term math is still strong. Over 25 years, the value of electricity produced can be many times the initial investment. A practical homeowner should not think of solar as a short-term gadget. It is a long-lived infrastructure purchase, closer to improving your roof or upgrading your electrical system than buying an appliance.</p>
      <p>If you want the fastest answer for your home, check your units, use our <a href="/solar-calculator">solar calculator</a>, and then book a site visit through <a href="/get-solar">AdiSolar</a>. A real quote becomes much easier when the system size is based on your roof and your bill, not a generic internet number.</p>

      <h2>Frequently asked questions</h2>
      <h3>Is ₹60,000 per kW a genuine market price?</h3>
      <p>Yes, for a good-quality on-grid residential system that includes installation. Quotes much below that often cut corners on panels, inverter quality, structure, or after-sales support.</p>
      <h3>Will subsidy money reduce my invoice immediately?</h3>
      <p>Usually the customer pays according to the installer agreement and receives the approved subsidy through the official process after commissioning and required approvals. Your vendor should explain the exact payment flow clearly.</p>
      <h3>Should I choose the largest system I can fit?</h3>
      <p>Not automatically. The best system size is tied to your monthly consumption, export rules, and roof conditions. Oversizing without a good reason can stretch payback instead of improving it.</p>
    `,
  },
  {
    slug: "pm-surya-ghar-subsidy-guide",
    title: "PM Surya Ghar Muft Bijli Yojana: Complete Application Guide for 2026",
    excerpt:
      "Up to ₹78,000 in central subsidy is available to Indian homeowners. Here's exactly how to apply and what to expect.",
    date: "2026-01-16",
    readTime: "9 min read",
    author: "Neha Verma",
    keywords: ["PM Surya Ghar subsidy", "solar subsidy India", "how to apply rooftop solar subsidy"],
    metaTitle: "PM Surya Ghar Muft Bijli Yojana: Complete Application Guide for 2026",
    metaDesc:
      "A practical 2026 guide to PM Surya Ghar rooftop solar subsidy in India, including eligibility, required steps, and common application mistakes.",
    content: `
      <p>For many Indian families, the subsidy is the reason rooftop solar shifts from “maybe later” to “let’s do it now.” But the process still feels confusing because it sits between three different worlds: the government portal, the local DISCOM, and the installer. If even one step is handled poorly, the project slows down. The good news is that the PM Surya Ghar Muft Bijli Yojana is far more structured than earlier rooftop schemes. If you understand the sequence and keep your documents ready, the path is manageable.</p>
      <p>This guide is written for homeowners, not policy people. It explains what the scheme is, how much support you can realistically receive, who qualifies, and how the application actually moves from registration to subsidy transfer.</p>

      <h2>What is PM Surya Ghar Muft Bijli Yojana?</h2>
      <p>PM Surya Ghar Muft Bijli Yojana was launched in February 2024 to accelerate rooftop solar adoption across India. The headline goal was ambitious: support 1 crore households and reduce the burden of rising power costs by encouraging homes to generate their own electricity. The scheme is often described in connection with up to 300 units of free electricity, but in practice what matters to the homeowner is this: the government supports eligible rooftop systems through a direct subsidy and a standardised application flow.</p>
      <p>That matters because it brings more consistency to a market that used to vary sharply from state to state. A homeowner can now start from the official portal, check feasibility through the DISCOM process, choose a registered vendor, complete installation, and then receive subsidy after commissioning and approval. It is not instant, but it is much clearer than before.</p>

      <h2>How much subsidy will you receive?</h2>
      <p>The central subsidy structure is simple and one of the easiest parts of the entire scheme to understand.</p>
      <table>
        <thead>
          <tr>
            <th>Approved size</th>
            <th>Subsidy amount</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 kW</td>
            <td>₹30,000</td>
            <td>Entry-level residential system</td>
          </tr>
          <tr>
            <td>2 kW</td>
            <td>₹60,000</td>
            <td>Common for smaller homes</td>
          </tr>
          <tr>
            <td>3 kW</td>
            <td>₹78,000</td>
            <td>Maximum common central subsidy</td>
          </tr>
        </tbody>
      </table>
      <p>The key point is that the major subsidy benefit tops out at 3 kW for most residential discussions. If you install a larger system, you may still do so if your usage supports it, but do not assume the central subsidy scales indefinitely. That misunderstanding creates a lot of confusion during budgeting.</p>

      <h2>Eligibility criteria</h2>
      <p>You must own the property where the rooftop solar system will be installed. A valid electricity connection with the relevant DISCOM is essential because the system must be tied into an official consumer account. The panels must meet DCR requirements, which is why installers talk so much about Indian-made or compliant modules. If the system does not meet the required standards, the subsidy path can break.</p>
      <p>You also cannot generally claim the same type of subsidy twice for the same consumer situation. If a previous rooftop subsidy has already been availed, the new application may not qualify. Your roof must also be practically usable. That means enough shadow-free space, safe structural condition, and a layout that allows the installer to mount the system properly. Eligibility is not just paperwork. It is also physical feasibility.</p>

      <h2>Step-by-step application process</h2>
      <p>Step 1 is registration on <a href="https://pmsuryaghar.gov.in" target="_blank" rel="noreferrer">pmsuryaghar.gov.in</a>. You select your state and DISCOM, enter consumer details, and create the application record. Step 2 is the feasibility check. The DISCOM reviews whether rooftop solar can be connected for that consumer and whether the proposed capacity makes sense. Once feasibility is approved, Step 3 is choosing a registered vendor.</p>
      <p>Step 4 is installation. The installer completes the structure, panels, inverter, protections, earthing, and required photographs or paperwork. Step 5 is net meter application and inspection. Step 6 is commissioning and generation readiness. Step 7 is bank details submission and any final portal formalities required for subsidy release. Step 8 is waiting for the credited subsidy, which many homeowners expect within about 30 days after the required approval milestones, though actual timing can still vary by processing speed.</p>
      <p>The most important practical lesson is that the portal is only one part of the journey. The DISCOM and installer must both do their jobs correctly. If one party is slow or careless, the file sits. That is why homeowners should keep copies of bill, identity proof, address proof, bank details, and property-related documents organised from the beginning.</p>

      <h2>Why let AdiSolar handle it?</h2>
      <p>Many homeowners assume the hard part is buying panels. It is not. The hard part is coordination. DIY applications commonly fail because of mismatched consumer details, incomplete uploads, wrong system sizing, missing commissioning evidence, or choosing equipment that is technically installable but not suitable for subsidy processing. These are not dramatic mistakes, but they cost time.</p>
      <p>AdiSolar handles the document preparation, vendor-side submission flow, installation photos, compliance checks, and DISCOM coordination so the homeowner is not stuck interpreting technical language from multiple offices. In practical terms, that means fewer revisits, fewer rejected uploads, and a cleaner timeline. We also design the system around your bill and roof instead of forcing a standard size on every home. If you want to start with sizing first, use the <a href="/solar-calculator">solar calculator</a>. If you are ready to move, book a consultation at <a href="/get-solar">get-solar</a>.</p>
      <p>The biggest value is not “convenience” in the soft sense. It is risk reduction. A good installer prevents administrative friction from becoming a financial delay.</p>

      <h2>Frequently asked questions</h2>
      <h3>Can tenants apply for the subsidy?</h3>
      <p>In most practical cases, the beneficiary should be the property owner with a valid consumer connection. Tenant-led installations are usually more complicated and are not the standard use case.</p>
      <h3>Do imported panels qualify?</h3>
      <p>Subsidy-linked installations must follow the applicable DCR and program requirements. That is why homeowners should confirm module eligibility before paying any advance.</p>
      <h3>How long does DISCOM approval take?</h3>
      <p>It varies by state and utility. Some cases move quickly, while others slow down at feasibility or net metering. A realistic installer should promise process discipline, not magical timelines.</p>
      <h3>Will I need to visit government offices?</h3>
      <p>In a well-managed installation, most homeowners should not need to make repeated office visits. Much depends on the vendor’s process and local DISCOM workflow.</p>
    `,
  },
  {
    slug: "on-grid-vs-off-grid-solar-india",
    title: "On-Grid vs Off-Grid Solar in India: Which Is Right for You in 2026?",
    excerpt:
      "Most urban Indians should choose on-grid solar. But off-grid makes sense in specific situations. An honest comparison.",
    date: "2026-01-20",
    readTime: "8 min read",
    author: "Amit Kulkarni",
    keywords: ["on grid vs off grid solar India", "hybrid solar system India", "best solar system for home India"],
    metaTitle: "On-Grid vs Off-Grid Solar in India: Which Is Right for You in 2026?",
    metaDesc:
      "Compare on-grid, off-grid, and hybrid solar systems in India with honest guidance on cost, subsidy, backups, and where each setup makes sense.",
    content: `
      <p>People shopping for solar in India usually hear three terms very early: on-grid, off-grid, and hybrid. These are often explained poorly. One salesperson says off-grid gives “total freedom.” Another says on-grid is always best. The right answer depends less on fashion and more on your electricity reliability, your budget, and whether your home or business can tolerate outages.</p>
      <p>If you understand one core difference, the rest becomes much easier. On-grid solar uses the electricity grid as your backup. Off-grid solar uses batteries as your backup. Hybrid combines both. Everything else, from cost to subsidy to user experience, flows from that choice.</p>

      <h2>The key difference in one sentence</h2>
      <p>On-grid systems depend on the grid being available when solar production is low. Off-grid systems depend on batteries being available when solar production is low. A hybrid system can do both. That single distinction affects your cost, maintenance, subsidy position, and power-cut experience.</p>

      <h2>On-grid solar: pros, cons, who it's for</h2>
      <p>On-grid solar is the default recommendation for most urban Indian homes. It is the most cost-effective format because it avoids the large battery expense. During the day, your panels generate electricity for your home. If you produce more than you use, the extra can be exported through net metering, subject to local rules. At night or during low generation, you pull power from the grid as usual.</p>
      <p>The biggest advantages are price and payback. On-grid systems are generally eligible for the most straightforward subsidy structure, and they provide the strongest return for families trying to reduce monthly bills. The main limitation is also important: standard on-grid systems typically shut down during a power cut for safety reasons, even if the sun is shining. So if your area has frequent outages and uninterrupted power is essential, on-grid alone may feel incomplete.</p>
      <p>For a city home with decent DISCOM reliability, predictable billing, and no special backup requirement, on-grid remains the sensible choice. If you want to estimate the correct size first, start with the <a href="/solar-calculator">solar calculator</a>.</p>

      <h2>Off-grid solar: pros, cons, who it's for</h2>
      <p>Off-grid solar uses batteries to store energy for later use. This gives true independence from the grid or at least deep reduction in grid dependence. That is why off-grid setups make sense in farmhouses, rural sites, remote properties, and parts of India where outages are not occasional annoyances but a daily operating reality.</p>
      <p>The tradeoff is cost. Batteries can add roughly 30 to 40 percent or more to the project cost depending on chemistry, backup requirement, and discharge design. Battery systems also need more careful maintenance logic, temperature awareness, and replacement planning over the long term. You do not get the simplicity of exporting to the grid in the same way an on-grid net-metered customer can.</p>
      <p>Another practical difference is system discipline. Off-grid users need to think about load priority in a way on-grid users often do not. If a property is trying to run pumps, multiple air conditioners, kitchen appliances, and lighting from stored energy, battery sizing becomes critical. That means off-grid is rarely a “cheap alternative to the grid.” It is a deliberate energy design choice for places where reliability or independence matters more than the shortest payback.</p>
      <p>Off-grid is worth considering when the grid is weak, absent, or so unreliable that business continuity or basic household functioning becomes difficult. It is also practical where diesel generator dependence is expensive and unpleasant. In those cases, the higher cost buys you resilience, not just energy savings.</p>

      <h2>Hybrid solar: premium option explained</h2>
      <p>Hybrid systems combine solar, grid connectivity, and battery backup. They are effectively the “best of both worlds” option, but also the most expensive. A good hybrid setup can keep selected loads running during outages while still allowing solar self-consumption and grid interaction. For homes with medical equipment, clinics, premium residences, or businesses that cannot afford dark periods, hybrid can be the most rational choice.</p>
      <p>What many buyers miss is that hybrid is not automatically better for everyone. It is better only if the extra reliability is valuable enough to justify the additional capital cost. If your area has stable power and your main goal is bill reduction, that extra spend may not be necessary.</p>

      <h2>Three questions to decide which is right for you</h2>
      <p>First, how reliable is your grid? If outages are rare and short, on-grid is usually enough. If they are frequent and disruptive, hybrid or off-grid deserves serious consideration. Second, what is your budget? A customer who wants the shortest payback period should usually stay on-grid. Third, do you have critical loads that must run 24/7, such as clinic equipment, security systems, networking gear, refrigerators with sensitive stock, or home medical devices? If yes, battery-backed design becomes much more attractive.</p>
      <p>These three questions are more useful than generic marketing labels because they tie the system choice to lived reality. Solar must match the job it is meant to do.</p>
      <p>A fourth, quieter question is whether your consumption happens in the daytime or at night. Homes where people are away all day and return late evening may still save well with on-grid solar, but the role of export rules becomes more important. Businesses with strong daytime loads usually benefit very naturally from on-grid systems because they consume power when the sun is strongest. Load timing is often the missing piece in first-time solar decisions.</p>

      <h2>Price comparison table (3kW example)</h2>
      <table>
        <thead>
          <tr>
            <th>System type</th>
            <th>Typical price</th>
            <th>What you get</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>On-grid</td>
            <td>₹1,32,000 after subsidy</td>
            <td>Best ROI, grid-connected, no battery backup during outage</td>
          </tr>
          <tr>
            <td>Off-grid</td>
            <td>₹1,80,000–₹2,20,000</td>
            <td>Battery backup, higher independence, no simple net metering benefit</td>
          </tr>
          <tr>
            <td>Hybrid</td>
            <td>₹2,50,000–₹3,00,000</td>
            <td>Grid plus battery backup, premium performance and flexibility</td>
          </tr>
        </tbody>
      </table>
      <p>For most urban households, the honest answer is still on-grid. For properties that suffer 6+ hours of daily power cuts, off-grid or hybrid may be the wiser investment despite the higher upfront cost. If you want a recommendation tied to your bills and expected loads, book a consultation through <a href="/get-solar">AdiSolar</a> rather than choosing a system type in the abstract.</p>
      <p>That consultation matters because the best answer is sometimes mixed. A family may choose an on-grid system for savings and pair it with a smaller, separate inverter backup for critical lights and fans. Another customer may start on-grid and plan a later battery upgrade. The point is to solve the actual problem, not to buy the most impressive label.</p>

      <h2>Frequently asked questions</h2>
      <h3>Does on-grid solar work during a power cut?</h3>
      <p>Usually no. Standard on-grid systems shut down during outages to protect utility workers and comply with safety requirements.</p>
      <h3>Is off-grid solar always better for villages?</h3>
      <p>Not always. If the local grid is improving and net metering is practical, on-grid or hybrid may still be the better long-term value. The choice depends on actual reliability and economics.</p>
      <h3>Can I start on-grid and add batteries later?</h3>
      <p>Sometimes yes, especially if the system is designed with future upgrade paths in mind. That is one reason choosing the right inverter strategy at the beginning matters.</p>
    `,
  },
  {
    slug: "how-many-solar-panels-for-home-india",
    title: "How Many Solar Panels Do You Need for Your Home in India? (Simple Formula)",
    excerpt:
      "The number of panels depends on your monthly units and roof space. Here is the exact calculation with worked examples.",
    date: "2026-01-24",
    readTime: "8 min read",
    author: "Priya Nair",
    keywords: ["how many solar panels home India", "solar system size calculator India", "solar panel calculation"],
    metaTitle: "How Many Solar Panels Do You Need for Your Home in India? (Simple Formula)",
    metaDesc:
      "Use a simple India-specific method to estimate the right rooftop solar size, number of panels, and roof area for your home.",
    content: `
      <p>One of the most common questions homeowners ask is also one of the most useful: how many solar panels do I actually need? The answer is not guessed from house size or number of rooms alone. It starts with electricity consumption. Once you know your monthly units, sizing becomes surprisingly simple.</p>
      <p>In India, most residential solar estimates can begin with a quick rule of thumb: monthly units divided by about 120 gives the approximate system size in kW. From there, you can convert kW into panel count based on the wattage of the modules you plan to use. This method is not a replacement for a real site survey, but it is accurate enough to help families set a budget and judge whether their roof is likely to be sufficient.</p>

      <h2>Step 1: Find your monthly electricity units</h2>
      <p>Start with your electricity bill. Look for “units consumed,” “consumption,” or “kWh.” In practice, 1 unit equals 1 kWh. Whether your utility is BSES in Delhi, MSEDCL in Maharashtra, BESCOM in Bengaluru, or another DISCOM, the bill will show this figure somewhere near the tariff or billing summary. Do not confuse rupees with units. A ₹3,000 bill and 300 units are not the same thing.</p>
      <p>If your usage changes sharply by season, look at the last 6 to 12 months and work with an average. That is especially important if you use air conditioners heavily in summer or have a home office load that was added recently.</p>

      <h2>Step 2: The simple formula</h2>
      <p>Use this quick formula: monthly units ÷ 120 = approximate solar capacity in kW. The reason this works is that 1 kW of rooftop solar in India often produces roughly 4 to 5 units a day on average, which works out to around 120 to 150 units a month depending on city, season, dust, orientation, and shading. Using 120 is conservative enough for planning.</p>
      <p>So if your home uses 300 units a month, then 300 ÷ 120 = 2.5 kW. In the real world, you would usually round that to a 3 kW system. Rounding up is better than rounding down because usage rises over time, and generation assumptions should stay realistic.</p>

      <h2>Step 3: Convert kW to number of panels</h2>
      <p>Once you know the system size, divide it by panel wattage. A 3 kW system is 3000 watts. If you use 400 W panels, then 3000 ÷ 400 = 7.5, so you need 8 panels. If you use 350 W panels, then 3000 ÷ 350 = 8.6, so you need 9 panels. This is why newer high-wattage modules are useful on smaller roofs: they reduce the number of panels required for the same capacity.</p>
      <p>Installers sometimes recommend slightly different combinations based on inverter compatibility and panel availability, but the core calculation stays the same. If you want a fast digital estimate, our <a href="/solar-calculator">solar calculator</a> uses the same logic and gives you a cleaner starting point before a site visit.</p>

      <h2>How much roof space do you need?</h2>
      <p>A modern residential panel usually needs around 2 square metres of effective area once spacing and mounting reality are considered. That means a 3 kW system with roughly 8 panels may need about 16 to 18 square metres of usable, shadow-free roof. A flat RCC roof is the easiest because the mounting angle can be set properly. Sloped roofs can also work, but framing, layout, and access become more important.</p>
      <p>The key phrase is usable roof space, not total roof space. Water tanks, parapet walls, stair heads, shade from neighbouring buildings, and trees all reduce what is actually available. A good installer will map those obstructions before confirming final capacity.</p>
      <p>Orientation also affects the final design. South-facing layouts are often ideal, but east-west arrangements can still perform well when designed properly. Homeowners should not reject their roof too quickly just because it is not “perfect.” The bigger issue is usually shadows, not compass direction alone.</p>

      <h2>What if you have air conditioning?</h2>
      <p>Air conditioning changes the calculation more than almost any other household appliance. A 1-ton AC can draw roughly 1 kW per hour while running, though the actual consumption varies by efficiency and compressor behavior. If one AC runs for 6 hours a day during hot months, that can add around 180 units a month. Two ACs can push your bill sharply higher.</p>
      <p>The practical approach is simple: estimate your base monthly usage, then add likely AC consumption. If your non-AC bill averages 220 units and AC adds another 180 units in the months that matter most, you should be thinking closer to a 3.5 to 4 kW design, not a 2 kW system that only looked fine in winter.</p>
      <p>The same logic applies if you plan to add new appliances soon. A future geyser, extra refrigerator, induction cooktop, or electric vehicle charger can change the economics. Solar sizing is cheapest when anticipated early. Expanding later is possible, but it is easier to plan the roof and inverter strategy correctly from the start.</p>

      <h2>Worked examples by home type</h2>
      <table>
        <thead>
          <tr>
            <th>Home type</th>
            <th>Monthly usage</th>
            <th>Approx system</th>
            <th>Panel count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1BHK</td>
            <td>150 units</td>
            <td>1.5 kW</td>
            <td>4 panels of 400 W</td>
          </tr>
          <tr>
            <td>2BHK</td>
            <td>300 units</td>
            <td>3 kW</td>
            <td>8 panels of 400 W</td>
          </tr>
          <tr>
            <td>3BHK with 2 ACs</td>
            <td>600 units</td>
            <td>5 kW</td>
            <td>13 panels of 400 W</td>
          </tr>
          <tr>
            <td>Villa or bungalow</td>
            <td>1000+ units</td>
            <td>8–10 kW</td>
            <td>20–25 panels</td>
          </tr>
        </tbody>
      </table>
      <p>These are planning examples, not final engineering designs. Real output will still depend on shading, panel orientation, city-level solar irradiance, and whether your usage is concentrated in daytime or late evening.</p>
      <p>A useful rule for families is to size for normal life, not an unusually low month. If you choose a system based only on monsoon-season usage or a temporary vacancy period, it may feel undersized for most of the year. The most reliable way to avoid that mistake is to work from annual bill history and then validate it during a site visit.</p>
      <p>If you want the most accurate next step, use our <a href="/solar-calculator">calculator</a> to get your exact estimate and then book a roof assessment through <a href="/get-solar">AdiSolar</a>. A proper site visit can confirm panel count, roof layout, and the best subsidy-eligible system size.</p>
    `,
  },
  {
    slug: "solar-installation-process-india",
    title: "Solar Panel Installation Process in India: What Happens from Day 1 to Switch-On",
    excerpt:
      "Worried about disruption? Here's exactly what happens during a professional solar installation — step by step, day by day.",
    date: "2026-01-28",
    readTime: "9 min read",
    author: "Sanjay Patel",
    keywords: ["solar installation process India", "solar panel installation steps", "how long solar installation takes"],
    metaTitle: "Solar Panel Installation Process in India: What Happens from Day 1 to Switch-On",
    metaDesc:
      "See what a professional rooftop solar installation in India looks like from site visit through switch-on, net meter application, and long-term support.",
    content: `
      <p>Many homeowners want solar but delay the decision because they are worried about the installation itself. Will the roof be damaged? How long will workers be in the house? Will there be drilling everywhere? What happens with the electricity connection? These are reasonable concerns, especially for families doing this for the first time.</p>
      <p>A professional rooftop solar installation is much less chaotic than most people imagine. When the project is well planned, the process is orderly: survey, design, structure, panel mounting, inverter work, testing, and then the net meter follow-up. The physical installation is usually only a small part of the overall journey. Paperwork and approvals often take longer than the rooftop work.</p>

      <h2>Before Day 1: The site visit and design phase</h2>
      <p>Everything starts with the site visit. An engineer checks roof dimensions, sunlight exposure, shading from neighbouring buildings, cable route options, and the condition of the electrical panel. Load calculation is part of this stage. The goal is to understand how much electricity you actually use and whether the roof can safely and efficiently support that capacity.</p>
      <p>Good installers also do a basic shadow analysis. A panel under partial shade can affect the output of a larger string, so roof layout matters. After the visit, the design team prepares a proposal that usually includes estimated generation, system size, structure concept, and pricing. In a disciplined workflow, the proposal can be ready within 48 hours. If subsidy is relevant, the paperwork process should begin alongside design rather than after installation.</p>

      <h2>Day 1 (morning): Mounting structure installation</h2>
      <p>The first visible stage on site is structure installation. For most homes this means GI or aluminium mounting frames placed on the roof according to the design layout. Drill points are marked carefully, anchors are installed, and sealing measures are used so waterproofing is not casually compromised. A competent team does not “just drill and hope.” They work to preserve roof integrity while creating a stable, wind-resistant mounting base.</p>
      <p>This stage usually takes around 3 to 5 hours for a standard home project, depending on roof access and size. When homeowners hear drilling, they often assume leakage is inevitable. In reality, poor workmanship causes leakage, not the idea of solar itself. The quality of anchoring and sealing matters more than the mere fact that the roof was touched.</p>

      <h2>Day 1 (afternoon): Panel placement and DC wiring</h2>
      <p>Once the structure is ready, panels are mounted and aligned. The technicians then begin DC string wiring, connecting panel outputs in the required series or series-parallel arrangement. Cables should be routed through proper conduit or protected runs, not left loosely exposed on the terrace. Good cable management is not cosmetic. It protects the system from weather, accidental damage, and long-term deterioration.</p>
      <p>This stage often takes another 3 to 4 hours for a typical residential system. By the end of it, the roof starts to look complete, but the system is not ready to power the home yet. The electricity coming from the panels is DC, and it still needs to pass through the inverter and associated protections.</p>

      <h2>Day 2: Inverter and AC wiring</h2>
      <p>On the next working block, the inverter is installed in a shaded, ventilated location. This may be near the distribution board, in a utility area, or on a protected wall space. Inverter placement matters because heat and dust affect performance and service life. The team then completes AC wiring from the inverter to the home’s electrical distribution system.</p>
      <p>This stage also includes essential safety components: isolators, earthing, and surge protection as required by the project design. These parts are not exciting in a brochure, but they are critical to electrical safety. The work commonly takes 3 to 4 hours for a normal home installation. At this point, the system is close to operational from an electrical perspective.</p>

      <h2>Final testing and switch-on</h2>
      <p>Before handover, the installer performs generation and safety tests. DC values, AC output, inverter status, and protection behavior are checked. The homeowner is usually shown how to read the inverter display or mobile monitoring app. On a bright day, your first day’s output should look reasonable for the installed capacity and the local weather. A 3 kW system, for example, may produce around 8 to 12 units in a day under fair conditions.</p>
      <p>You should also know what to monitor yourself. Weekly checks are enough for most homes. Look for obvious drops in output, app alerts, tripped protection devices, or visible dirt buildup if your area is dusty. Solar is low-maintenance, but not zero-attention.</p>

      <h2>Net meter application and the waiting period</h2>
      <p>Many homeowners assume the project ends when the inverter turns on. In reality, the next important stage is net metering. AdiSolar files the relevant application on installation day or immediately after the system is ready, depending on the local process. The DISCOM then inspects and approves the connection flow. In many Indian states, this takes 2 to 4 weeks, though actual timing varies.</p>
      <p>During this waiting period, you can still benefit from self-consumption. Power generated and used inside the home reduces the electricity you would otherwise buy from the grid. What you may not receive yet, depending on status, is the full export credit advantage of an active net meter. That distinction is worth understanding so expectations stay realistic.</p>

      <h2>After installation: your long-term relationship</h2>
      <p>Once the system is live, the relationship should not end with a final invoice. You should receive access to monitoring, basic cleaning guidance, warranty details, and a clear escalation path if output falls or an electrical issue appears. Annual cleaning and occasional inspection are usually enough for well-installed systems. Some homeowners choose an AMC for periodic checks, especially in dusty cities or larger homes.</p>
      <p>The best installer is not simply the one who finishes fastest. It is the one who remains accountable. If you want a professionally managed installation from design through switch-on and post-install support, start with <a href="/get-solar">AdiSolar</a>. If you are still working out system size and budget, use the <a href="/solar-calculator">solar calculator</a> first.</p>

      <h2>Frequently asked questions</h2>
      <h3>How long does the physical installation take?</h3>
      <p>For many homes, the rooftop and electrical work is completed in one to two days. Complex roofs or weather delays can stretch that slightly.</p>
      <h3>Will drilling damage my roof waterproofing?</h3>
      <p>Not when the work is done correctly. Leakage risk is mainly a workmanship issue, which is why structure quality and sealing details matter.</p>
      <h3>Do savings start before net metering is fully active?</h3>
      <p>Yes, because self-consumed solar power already reduces grid consumption. What changes after net metering is how exported surplus is credited.</p>
    `,
  },
];

export const blogFaqs: Record<string, BlogFaq[]> = {
  "solar-panel-cost-india-2026": [
    {
      question: "Is ₹60,000 per kW a genuine market price?",
      answer:
        "Yes. For a good-quality residential on-grid system in India, ₹60,000 to ₹70,000 per kW is a realistic planning range before subsidy.",
    },
    {
      question: "Will subsidy money reduce my invoice immediately?",
      answer:
        "Not always. In most cases the subsidy follows the official approval and commissioning process rather than being treated as an instant discount at quotation stage.",
    },
    {
      question: "Should I choose the largest system I can fit?",
      answer:
        "No. The better approach is to match the system to your monthly units, roof layout, and local export rules so payback remains strong.",
    },
  ],
  "pm-surya-ghar-subsidy-guide": [
    {
      question: "Can tenants apply for the subsidy?",
      answer:
        "The scheme is primarily structured for property owners with a valid electricity connection tied to the installation site.",
    },
    {
      question: "Do imported panels qualify?",
      answer:
        "Subsidy-linked residential installations must follow the relevant DCR and program requirements, so panel eligibility must be checked before purchase.",
    },
    {
      question: "How long does DISCOM approval take?",
      answer:
        "Timelines vary by state and utility. Feasibility, inspection, and net meter steps move faster in some DISCOMs than others.",
    },
    {
      question: "Will I need to visit government offices?",
      answer:
        "In a well-managed installation, repeated visits are often unnecessary because the installer handles most of the submission and coordination work.",
    },
  ],
  "on-grid-vs-off-grid-solar-india": [
    {
      question: "Does on-grid solar work during a power cut?",
      answer:
        "Normally no. Standard on-grid systems shut down during outages for safety unless battery-backed architecture is built into the design.",
    },
    {
      question: "Is off-grid solar always better for villages?",
      answer:
        "No. It depends on actual grid reliability, battery needs, and whether net metering or hybrid design would create a better long-term result.",
    },
    {
      question: "Can I start on-grid and add batteries later?",
      answer:
        "Sometimes yes, especially if the initial system is designed with future hybrid or storage upgrades in mind.",
    },
  ],
  "solar-installation-process-india": [
    {
      question: "How long does the physical installation take?",
      answer:
        "For many homes, the rooftop and electrical work is completed in one to two days, excluding DISCOM net meter processing time.",
    },
    {
      question: "Will drilling damage my roof waterproofing?",
      answer:
        "Not if the structure is installed correctly with proper anchoring and sealing. Poor workmanship is the real risk, not solar itself.",
    },
    {
      question: "Do savings start before net metering is active?",
      answer:
        "Yes. The home still benefits from self-consumed solar power even before export credits through net metering begin.",
    },
  ],
};

export const blogFeaturedImages: Record<string, string> = {
  "solar-panel-cost-india-2026": "/assets/solar/subsidy-placeholder.jpg",
  "pm-surya-ghar-subsidy-guide": "/assets/solar/subsidy-placeholder.jpg",
  "on-grid-vs-off-grid-solar-india": "/assets/solar/types-placeholder.jpg",
  "how-many-solar-panels-for-home-india": "/assets/solar/hero-placeholder.jpg",
  "solar-installation-process-india": "/assets/solar/flow-placeholder.jpg",
};

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
