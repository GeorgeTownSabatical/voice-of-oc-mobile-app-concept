const stories = [
  {
    id: "chemical-tank",
    label: "Countywide",
    title: "OC officials face questions after chemical tank evacuations are lifted",
    summary:
      "Residents want accountability, reimbursement details, and a clearer public record after a regional emergency.",
    time: "Updated 18 min ago",
    author: "Voice of OC Staff",
    image:
      "https://i0.wp.com/voiceofoc.org/wp-content/uploads/2026/05/0A4A3648.jpg?resize=800%2C600&ssl=1",
    caption:
      "A Red Cross shelter was set up during the Orange County chemical tank emergency. Credit: Voice of OC photography.",
    body: [
      "Orange County residents are asking for a clearer public accounting of what happened, who made decisions, and what safeguards come next after evacuations tied to a chemical tank emergency were lifted.",
      "The central civic question is not only whether the immediate danger has passed. It is whether local agencies can explain the timeline, costs, warnings, public communication, and reimbursement process in a way residents can inspect.",
      "Voice of OC's mobile experience should keep that follow-up visible after the breaking-news moment fades, connecting the story to public meetings, source documents, and city-specific alerts."
    ]
  },
  {
    id: "santa-ana-budget",
    label: "Santa Ana",
    title: "Budget cuts loom for parks and after-school programs in Santa Ana",
    summary:
      "A city budget decision could affect youth programs, park repairs, and neighborhood services.",
    time: "1 hr ago",
    author: "Civic Desk",
    image:
      "https://i0.wp.com/voiceofoc.org/wp-content/uploads/2024/12/GerardoPark_santaAna_2024_nichols22.jpg?resize=800%2C600&ssl=1",
    caption:
      "Children play at Gerardo Mouet Park in Santa Ana. Credit: Voice of OC photography.",
    body: [
      "Santa Ana residents are watching budget talks that could shape park repairs, youth programming, and neighborhood services in the year ahead.",
      "A useful civic-news app should connect this story to meeting dates, budget documents, and reminders before public comment closes.",
      "Following Santa Ana in My OC would keep related updates together instead of scattering them across a general news feed."
    ]
  },
  {
    id: "infant-health",
    label: "Public Health",
    title: "Officials will not pursue renewed funding for Black infant health program",
    summary:
      "Community health advocates say the decision leaves families with fewer targeted support options.",
    time: "3 hrs ago",
    author: "Health Reporter",
    image:
      "https://i0.wp.com/voiceofoc.org/wp-content/uploads/2026/05/IMG_6463.jpg?resize=800%2C600&ssl=1",
    caption:
      "A family support moment from local public health reporting. Credit: Voice of OC photography.",
    body: [
      "A county funding decision has raised concerns among advocates who say maternal and infant health programs need consistent public support.",
      "The story belongs in a civic utility because it sits at the intersection of public health, county budgeting, and unequal outcomes.",
      "Readers should be able to follow the topic, save the story, and inspect the source documents behind the decision."
    ]
  }
];

const watchItems = [
  {
    entity: "Garden Grove and Stanton",
    action: "Special meeting follow-up",
    title: "Cities request accountability report after emergency evacuations",
    next: "Next public update expected this week"
  },
  {
    entity: "Santa Ana",
    action: "Budget hearing",
    title: "Council weighs cuts to parks and after-school programs",
    next: "Public comment window remains open"
  },
  {
    entity: "County Supervisors",
    action: "Public health funding",
    title: "Black infant health program renewal is not moving forward",
    next: "Advocates are requesting county response"
  }
];

const alerts = [
  {
    tone: "urgent",
    label: "Breaking",
    title: "Chemical tank evacuation order lifted for affected OC neighborhoods",
    time: "18 min ago"
  },
  {
    tone: "important",
    label: "Santa Ana",
    title: "Budget hearing reminder: public comment closes tonight",
    time: "2 hrs ago"
  },
  {
    tone: "important",
    label: "My OC",
    title: "New story in Public Health, a topic you follow",
    time: "3 hrs ago"
  }
];

const followedTopics = ["Countywide", "Santa Ana", "Public Health", "Homelessness", "Arts & Culture"];
const saved = new Set(["santa-ana-budget"]);
const appView = document.querySelector("#appView");
const donationUrl = "https://support.voiceofoc.org/campaign/796416/donate";

function imageCard(story, compact = false) {
  return `
    <article class="article-card ${compact ? "compact" : ""}">
      ${compact ? "" : `<img src="${story.image}" alt="">`}
      <div class="article-body">
        <div class="tag">${story.label}</div>
        <h3 class="article-title">${story.title}</h3>
        <div class="article-actions">
          <span class="meta">${story.time}</span>
          <button class="save-button ${saved.has(story.id) ? "saved" : ""}" type="button" data-save="${story.id}" aria-label="Save story">
            ${saved.has(story.id) ? "★" : "☆"}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderHome() {
  const lead = stories[0];
  appView.innerHTML = `
    <section class="screen">
      <div class="screen-header">
        <div>
          <div class="eyebrow">Today in Orange County</div>
          <h1 class="screen-title">What your city is doing now</h1>
        </div>
      </div>

      <article class="lead-card" data-story="${lead.id}">
        <img class="lead-image" src="${lead.image}" alt="">
        <div class="lead-body">
          <div class="tag">${lead.label}</div>
          <h2 class="lead-title">${lead.title}</h2>
          <p class="summary">${lead.summary}</p>
          <div class="button-row">
            <button class="primary-button" type="button" data-story-open="${lead.id}">Read story</button>
            <button class="secondary-button" type="button" data-view="alerts">Follow updates</button>
          </div>
        </div>
      </article>

      <div class="section-label">Civic Watch</div>
      <div class="watch-list">
        ${watchItems.map(watchItem).join("")}
      </div>

      <div class="section-label">Latest Reporting</div>
      <div class="article-list">
        ${stories.slice(1).map((story) => imageCard(story)).join("")}
      </div>

      <section class="module orange">
        <h2 class="module-title">Morning Report</h2>
        <p class="summary">A concise daily briefing on public decisions, local accountability, arts, and community life.</p>
        <form class="newsletter-form">
          <input type="email" value="" placeholder="Email address" aria-label="Email address">
          <button class="primary-button" type="submit">Sign up</button>
        </form>
      </section>

      <section class="module">
        <h2 class="module-title">Join the civic Slack</h2>
        <p class="summary">Readers and local organizations can request an invite for moderated topic channels, public meeting reminders, and community source calls.</p>
        <form class="slack-form">
          <input type="email" placeholder="Email for Slack invite" aria-label="Email for Slack invite" required>
          <input type="text" placeholder="Organization or neighborhood" aria-label="Organization or neighborhood">
          <button class="secondary-button" type="submit">Request Slack invite</button>
        </form>
      </section>
    </section>
  `;
}

function watchItem(item) {
  return `
    <article class="watch-item">
      <div class="tag">${item.entity} · ${item.action}</div>
      <h3 class="watch-title">${item.title}</h3>
      <p class="summary">${item.next}</p>
    </article>
  `;
}

function renderMyOC() {
  appView.innerHTML = `
    <section class="screen">
      <div class="screen-header">
        <div>
          <div class="eyebrow">Personalized by city and topic</div>
          <h1 class="screen-title">My OC</h1>
        </div>
      </div>

      <div class="chip-row">
        ${followedTopics.map((topic) => `<button class="chip active" type="button">${topic}</button>`).join("")}
        <button class="chip" type="button">+ Irvine</button>
        <button class="chip" type="button">+ Anaheim</button>
      </div>

      <section class="module">
        <h2 class="module-title">Why this is in My OC</h2>
        <p class="summary">You follow Santa Ana and Public Health. New budget and county health stories will stay grouped here.</p>
      </section>

      <div class="section-label">For your cities</div>
      <div class="article-list">
        ${stories.slice(1).map((story) => imageCard(story)).join("")}
      </div>

      <div class="section-label">Upcoming civic dates</div>
      <div class="watch-list">${watchItems.slice(1).map(watchItem).join("")}</div>
    </section>
  `;
}

function renderLatest() {
  appView.innerHTML = `
    <section class="screen">
      <div class="screen-header">
        <div>
          <div class="eyebrow">Chronological feed</div>
          <h1 class="screen-title">Latest</h1>
        </div>
      </div>
      <div class="filter-row">
        <button class="filter-button active" type="button">All</button>
        <button class="filter-button" type="button">News</button>
        <button class="filter-button" type="button">Opinion</button>
        <button class="filter-button" type="button">Arts</button>
      </div>
      <div class="section-label">Newest posts</div>
      <div class="article-list">
        ${stories.map((story) => imageCard(story, true)).join("")}
      </div>
    </section>
  `;
}

function renderAlerts() {
  appView.innerHTML = `
    <section class="screen">
      <div class="screen-header">
        <div>
          <div class="eyebrow">Controlled civic notifications</div>
          <h1 class="screen-title">Alerts</h1>
        </div>
      </div>
      <div class="alert-list">
        ${alerts
          .map(
            (alert) => `
              <article class="alert-card ${alert.tone === "urgent" ? "urgent" : ""}">
                <div class="tag">${alert.label}</div>
                <h3 class="article-title">${alert.title}</h3>
                <span class="meta">${alert.time}</span>
              </article>
            `
          )
          .join("")}
      </div>
      <section class="module">
        <h2 class="module-title">Alert preferences</h2>
        <div class="chip-row">
          <button class="chip active" type="button">Breaking</button>
          <button class="chip active" type="button">Followed cities</button>
          <button class="chip" type="button">Elections</button>
          <button class="chip" type="button">Arts</button>
        </div>
      </section>
    </section>
  `;
}

function renderSaved() {
  const savedStories = stories.filter((story) => saved.has(story.id));
  appView.innerHTML = `
    <section class="screen">
      <div class="screen-header">
        <div>
          <div class="eyebrow">Reading follow-up</div>
          <h1 class="screen-title">Saved</h1>
        </div>
      </div>
      <div class="article-list">
        ${savedStories.length ? savedStories.map((story) => imageCard(story)).join("") : `<section class="module"><h2 class="module-title">No saved stories yet</h2><p class="summary">Tap the star on any story to keep it here.</p></section>`}
      </div>
      <div class="section-label">Followed topics</div>
      <div class="chip-row">${followedTopics.map((topic) => `<button class="chip active" type="button">${topic}</button>`).join("")}</div>
    </section>
  `;
}

function renderSupport() {
  appView.innerHTML = `
    <section class="screen">
      <div class="screen-header">
        <div>
          <div class="eyebrow">Support nonprofit local journalism</div>
          <h1 class="screen-title">Fund accountability reporting</h1>
        </div>
      </div>
      <section class="support-card module orange">
        <h2 class="module-title">Voice of OC is built for public-interest reporting.</h2>
        <p class="summary">Your support helps reporters keep following city budgets, county decisions, public records, arts, and community life. Online donations route to Voice of OC's current support campaign.</p>
        <div class="amount-row" style="margin-top:12px">
          <button class="amount-button" type="button">$10</button>
          <button class="amount-button active" type="button">$25</button>
          <button class="amount-button" type="button">$50</button>
          <button class="amount-button" type="button">$100</button>
        </div>
        <div class="button-row">
          <a class="primary-button" href="${donationUrl}" target="_blank" rel="noreferrer">Donate online</a>
          <a class="secondary-button" href="https://voiceofoc.org/donate" target="_blank" rel="noreferrer">Other ways</a>
        </div>
      </section>
      <section class="module">
        <h2 class="module-title">Donation platform notes</h2>
        <p class="summary">The live site uses support.voiceofoc.org campaign links, Classy embedded giving scripts, and Virtuous CRM/newsletter embeds. Production should connect donation buttons to those systems directly.</p>
      </section>
      <section class="module">
        <h2 class="module-title">Organizations can join Slack</h2>
        <p class="summary">Civic groups, nonprofits, neighborhood associations, and local institutions can request moderated Slack access for public-interest updates.</p>
        <form class="slack-form">
          <input type="text" placeholder="Organization name" aria-label="Organization name" required>
          <input type="email" placeholder="Contact email" aria-label="Contact email" required>
          <button class="secondary-button" type="submit">Request organization invite</button>
        </form>
      </section>
      <section class="module">
        <h2 class="module-title">Trust links</h2>
        <p class="summary">Mission and values, funding transparency, nonprofit status, corrections, and republishing policies should be one tap away.</p>
      </section>
    </section>
  `;
}

function renderStory(id) {
  const story = stories.find((item) => item.id === id) || stories[0];
  appView.innerHTML = `
    <article class="story-page">
      <img class="story-hero" src="${story.image}" alt="">
      <p class="caption">${story.caption}</p>
      <div class="story-content">
        <div class="tag">${story.label}</div>
        <h1 class="story-title">${story.title}</h1>
        <p class="summary">${story.summary}</p>
        <p class="meta" style="margin-top:10px">By ${story.author} · ${story.time}</p>
        <div class="story-copy">
          ${story.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
        <section class="trust-block">
          <h3>Source documents</h3>
          <p class="summary">Agenda links, public records, agency documents, correction links, and reporting notes belong here when available.</p>
        </section>
        <section class="module orange">
          <h2 class="module-title">Support this kind of local reporting</h2>
          <p class="summary">Nonprofit civic journalism depends on readers who want public decisions to stay visible.</p>
          <div class="button-row">
            <button class="primary-button" type="button" data-view="support">Donate</button>
            <button class="secondary-button" type="button" data-save="${story.id}">Save</button>
          </div>
        </section>
      </div>
    </article>
  `;
}

const renderers = {
  home: renderHome,
  myoc: renderMyOC,
  latest: renderLatest,
  alerts: renderAlerts,
  saved: renderSaved,
  support: renderSupport
};

function setActiveNav(viewName) {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
}

function navigate(viewName) {
  const renderer = renderers[viewName] || renderHome;
  renderer();
  setActiveNav(renderers[viewName] ? viewName : "home");
  appView.scrollTop = 0;
  appView.focus({ preventScroll: true });
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    navigate(viewButton.dataset.view);
    return;
  }

  const storyButton = event.target.closest("[data-story-open]");
  if (storyButton) {
    renderStory(storyButton.dataset.storyOpen);
    setActiveNav("");
    appView.scrollTop = 0;
    return;
  }

  const storyCard = event.target.closest("[data-story]");
  if (storyCard) {
    renderStory(storyCard.dataset.story);
    setActiveNav("");
    appView.scrollTop = 0;
    return;
  }

  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const id = saveButton.dataset.save;
    if (saved.has(id)) {
      saved.delete(id);
    } else {
      saved.add(id);
    }
    const activeView = document.querySelector(".nav-item.active")?.dataset.view;
    if (activeView === "saved") {
      renderSaved();
    } else {
      saveButton.classList.toggle("saved", saved.has(id));
      saveButton.textContent = saved.has(id) ? "★" : "☆";
    }
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.matches(".newsletter-form")) {
    event.preventDefault();
    event.target.innerHTML = `<p class="summary"><strong>Signed up.</strong> This confirms the newsletter flow without sending data.</p>`;
  }

  if (event.target.matches(".slack-form")) {
    event.preventDefault();
    event.target.innerHTML = `<p class="summary"><strong>Slack invite requested.</strong> This prototype stores no data; production would send this to Slack admin review.</p>`;
  }
});

navigate("home");
