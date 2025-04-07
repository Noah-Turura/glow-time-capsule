const db = require('./db');

const characters = [
  {
    name: "Zion Banks",
    bio: "Former high school basketball star turned data-driven trainer.",
    personality: "Resilient, grounded, motivational",
    why_preserve: "To show that greatness isn’t just performance—it’s how you bounce back.",
    avatar_url: "",
    items: [
      {
        title: "2016 NBA Finals Game 7",
        description: "The greatest comeback in basketball history — LeBron’s block, Kyrie’s shot, legacy sealed.",
        type: "video",
        url: "https://www.youtube.com/watch?v=EoVTttvKfRs&ab_channel=ESPN"
      },
      {
        title: "Kobe Bryant's Mamba Mentality",
        description: "A symbol of discipline, resilience, and love for the game — my personal bible.",
        type: "quote",
        url: "https://en.wikipedia.org/wiki/Mamba_Mentality"
      },
      {
        title: "My First Pair of Jordans",
        description: "Scuffed and worn — proof I balled like it meant everything, even after the injury.",
        type: "artifact",
        url: "https://www.nike.com/w/jordan-shoes-37eefznik1"
      },
      {
        title: "ESPN Top 100 Ranking Slip",
        description: "The paper that told me I was ‘washed’ — but I used it as fuel every day.",
        type: "document",
        url: "https://www.espn.com/college-sports/recruiting/basketball"
      },
      {
        title: "Allen Iverson Practice Rant",
        description: "Proof that Black athletes are more than their game — raw, real, misunderstood.",
        type: "video",
        url: "https://www.youtube.com/watch?v=eGDBR2L5kzI"
      },
      {
        title: "Custom Knee Brace",
        description: "It creaks. It pinches. But it kept me walking. It deserves a place here too.",
        type: "artifact",
        url: "https://www.breg.com/products/knee-bracing/custom-knee-braces/"
      },
      {
        title: "Slam Magazine Cover - Allen Iverson",
        description: "Where I first saw swagger in print. He looked like me, talked like me. I believed.",
        type: "image",
        url: "https://www.slamonline.com/the-magazine/"
      },
      {
        title: "Black Lives Matter Jersey Patch",
        description: "Because this game exists in a bigger world. We wore it proudly.",
        type: "symbol",
        url: "https://www.nba.com/news/nba-to-allow-social-justice-messages-on-jerseys"
      },
      {
        title: "Local Rec League Trophy",
        description: "Not the biggest. Not the flashiest. But I led that team. That mattered.",
        type: "trophy",
        url: "https://www.trophydepot.com/basketball-trophies"
      },
      {
        title: "Open Letter to My Team",
        description: "Wrote this the night I retired — didn’t have the heart to read it out loud.",
        type: "letter",
        url: "https://medium.com/@formerhooper/open-letter-to-my-team-87d5f8c0b3cd"
      }
    ]
  },
  {
    name: "Thalrix the Desiccator",
    bio: "An exiled ocean spirit turned desert prophet, bent on purging the world of water after humanity poisoned his sacred seas.",
    personality: "Mythic, poetic, wrathful but wise",
    why_preserve: "To document the fall of water, the very element I once swore to protect. Let this record show how trust turned to betrayal—and how oceans turned to ash.",
    avatar_url: "",
    items: [
      {
        title: "A Desiccated Rose",
        description: "Once vibrant, now brittle — a symbol of the world's dependence on decay through hydration.",
        type: "artifact",
        url: ""
      },
      {
        title: "Map of the Salted Earth",
        description: "Thalrix’s pilgrimage across the Dead Lands, where lakes turned to glass.",
        type: "map",
        url: "https://en.wikipedia.org/wiki/Salt_flat"
      },
      {
        title: "The Last Bottle of Water",
        description: "A sealed relic of the old world. Not for use. Only remembrance.",
        type: "artifact",
        url: ""
      },
      {
        title: "Steam-Purged Scrolls",
        description: "Historical lies erased through ritual boiling. Truth left in ash and margin notes.",
        type: "text",
        url: ""
      },
      {
        title: "Poem: 'To Dry is to Heal'",
        description: "A sacred verse passed through arid wind — it cracks as it speaks.",
        type: "poem",
        url: ""
      },
      {
        title: "Dehumidifier Blueprint",
        description: "The sacred machine that birthed the Clean Air Age.",
        type: "blueprint",
        url: "https://www.aprilaire.com/whole-house-products/dehumidifier/"
      },
      {
        title: "Fragmented Fossil of a Fish",
        description: "Proof of past sins — aquatic life fossilized in denial.",
        type: "fossil",
        url: "https://www.nhm.ac.uk/discover/fossil-fish.html"
      },
      {
        title: "The Great Dry Treaty",
        description: "A pact signed in sand, refusing rain for freedom.",
        type: "document",
        url: ""
      },
      {
        title: "Evaporation Chamber Diagram",
        description: "A dream turned machine. No droplets survive its kiss.",
        type: "design",
        url: ""
      },
      {
        title: "Thalrix's Cloak of Arid Shadows",
        description: "Woven from desert winds and scorched myths.",
        type: "artifact",
        url: ""
      }
    ]
  },
  {
    name: "Lexxi.exe",
    bio: "Chaotic good Twitch streamer who turned memes into movements.",
    personality: "Unfiltered, funny, deeply real",
    why_preserve: "To capture the internet as it was—messy, loud, and meaningful.",
    avatar_url: "",
    items: [
      {
        title: "Twitch 'PogChamp' Emote",
        description: "The face that launched a million hype chats — an internet relic of collective excitement.",
        type: "meme",
        url: "https://knowyourmeme.com/memes/pogchamp"
      },
      {
        title: "First YouTube Vlog (Me at 13)",
        description: "Cringe? Absolutely. But it’s raw, real, and the start of my digital journey.",
        type: "video",
        url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g"
      },
      {
        title: "Reddit AMAs",
        description: "Where internet strangers become unexpectedly wise. The rawest form of Q&A that exists.",
        type: "thread",
        url: "https://www.reddit.com/r/IAmA/"
      },
      {
        title: "Among Us (Sus Era)",
        description: "The pandemic’s unofficial mascot — trust was dead, memes were thriving.",
        type: "game",
        url: "https://innersloth.com/gameAmongUs.php"
      },
      {
        title: "TikTok’s ‘For You’ Algorithm",
        description: "A chaotic, uncensored mirror of your subconscious — both genius and terrifying.",
        type: "tech",
        url: "https://www.tiktok.com/business/en/blog/how-tiktok-recommendation-system-works"
      },
      {
        title: "GME Stonks Chart",
        description: "A meme that bankrupted suits. WallStreetBets made history, one YOLO at a time.",
        type: "chart",
        url: "https://www.investopedia.com/gamestop-gme-short-squeeze-explained-5184583"
      },
      {
        title: "Copypasta Bible",
        description: "Bee Movie script. Navy SEAL rant. The sacred texts of shitposting culture.",
        type: "text",
        url: "https://knowyourmeme.com/memes/navy-seal-copypasta"
      },
      {
        title: "Twitch Ban Appeal Email",
        description: "Unjust. Unhinged. Unapologetic. I still stand by every cursed moment of that stream.",
        type: "document",
        url: ""
      },
      {
        title: "Deep Fried Meme Folder",
        description: "Compressed 900 times. Blinding saturation. Peak visual comedy.",
        type: "image",
        url: "https://knowyourmeme.com/memes/deep-fried-memes"
      },
      {
        title: "‘Internet Archive’ Bookmark",
        description: "Because some things deserve to be remembered, even after they're deleted.",
        type: "link",
        url: "https://archive.org/"
      }
    ]
  }
];

const seedDatabase = async () => {
  const sqlite3 = require('sqlite3').verbose();
  const db = new sqlite3.Database('./timecapsule.db');

  db.serialize(() => {
    db.run("DELETE FROM items");
    db.run("DELETE FROM characters");


    characters.forEach((char) => {
      db.run(
        `INSERT INTO characters (name, bio, personality, why_preserve, avatar_url)
       VALUES (?, ?, ?, ?, ?)`,
        [char.name, char.bio, char.personality, char.why_preserve, char.avatar_url],
        function (err) {
          if (err) {
            console.error("Character insert error:", err.message);
            return;
          }

          const characterId = this.lastID;
          char.items.forEach(item => {
            db.run(
              `INSERT INTO items (character_id, title, description, type, url)
             VALUES (?, ?, ?, ?, ?)`,
              [characterId, item.title, item.description, item.type, item.url]
            );
          });
        }
      );
    });
  });

  console.log("✅ Seed data inserted correctly by character name!");
};
seedDatabase