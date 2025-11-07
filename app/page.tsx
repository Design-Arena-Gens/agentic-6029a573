const backgroundMusicUrl =
  "https://cdn.pixabay.com/download/audio/2023/01/16/audio_c0f6ef9f62.mp3?filename=the-medieval-banquet-135505.mp3";

const scenes = [
  {
    id: "scene-1",
    title: "दृश्य १ · स्वर्णिम सुबह",
    description:
      "सुबह का समय है। सूरज की सुनहरी किरणें आनंदगढ़ के विशाल महल को हल्की आभा से ढक देती हैं। राजसी दीवारों से टकराकर प्रकाश बगीचे में फैले ओस से सजे फूलों पर नाचने लगता है। पक्षियों की चहचहाहट पूरे वातावरण में खुशियों की गूँज भरी धुन गाती है।",
    dialogues: [
      {
        speaker: "Narrator (Voice Over)",
        lines: [
          "बहुत समय पहले, आनंदगढ़ नाम के राज्य में खुशहाली का राज था।",
          "वहाँ की राजकुमारी आर्या अपनी सुंदरता और दया के लिए पूरे राज्य में प्रसिद्ध थी।",
          "और उसी राज्य में रहता था एक बहादुर युवक — वीर।"
        ],
        variant: "narrator"
      }
    ]
  },
  {
    id: "scene-2",
    title: "दृश्य २ · शस्त्र अभ्यास स्थल",
    description:
      "राजमहल के शस्त्र अभ्यास स्थल पर वीर अपनी तलवार की धार को नये जोश से आज़मा रहा है। उसके हर वार के साथ हवा में चमकदार लकीरें बनती हैं, और पसीने की बूंदें उसके संकल्प का प्रमाण देती हैं।",
    dialogues: [
      {
        speaker: "बोलू (एक छोटा नीला तोता, मजेदार आवाज में)",
        lines: [
          "अरे वीर! तलवार धीरे चला, कहीं फिर से खुद के पैर पे मत मार लेना!"
        ]
      },
      {
        speaker: "वीर (हँसते हुए)",
        lines: ["बोलू, इस बार नहीं! अब मैं पहले से ज्यादा तेज और मजबूत हूँ।"]
      },
      {
        speaker: "बोलू",
        lines: ["हाँ हाँ, तुम तो वीर हो ना, वीर “महाराज”!"]
      }
    ]
  },
  {
    id: "scene-3",
    title: "दृश्य ३ · राजमहल का बगीचा",
    description:
      "राजकुमारी आर्या का प्रिय बगीचा रंग-बिरंगे फूलों, सुगंधित हवाओं और शांत फव्वारों से भरा है। इसी बगीचे में राजकुमारी और वीर रोज़ शाम को मिलने आते थे, जहाँ उनकी हँसी और बातें, महल की दीवारों में दर्ज कहानियों की तरह गूंज उठती थीं।",
    dialogues: [
      {
        speaker: "राजकुमारी आर्या",
        lines: ["वीर, आज राज्य में फसल उत्सव है, तुम आओगे ना?"]
      },
      {
        speaker: "वीर",
        lines: ["बिलकुल राजकुमारी! आपके बिना उत्सव का क्या मज़ा।"]
      },
      {
        speaker: "Narrator",
        lines: [
          "दोनों की दोस्ती पूरे राज्य में मिसाल थी।",
          "लेकिन कोई नहीं जानता था कि इस खुशी के पीछे एक बड़ा तूफान आने वाला है।"
        ],
        variant: "narrator"
      }
    ]
  }
];

export default function Page() {
  return (
    <main className="page">
      <header className="header">
        <h1>आनंदगढ़ · आर्या और वीर की कथा</h1>
        <p>
          यह कथा हमें प्रेम, साहस और मित्रता की बारीकियों से परिचित कराती है।
          सुबह की शांत धुन से शुरू होकर यह कहानी आनंदगढ़ राज्य की धड़कनों को
          आपके सामने जीवंत करती है।
        </p>
        <div className="audio-player">
          <label htmlFor="royal-melody">
            पृष्ठभूमि संगीत · Calm Royal Melody
          </label>
          <audio
            id="royal-melody"
            controls
            preload="none"
            src={backgroundMusicUrl}
          >
            आपका ब्राउज़र ऑडियो टैग को सपोर्ट नहीं करता।
          </audio>
        </div>
      </header>

      <section className="content" aria-labelledby="story-heading">
        {scenes.map((scene) => (
          <article key={scene.id} id={scene.id} className="scene">
            <h2 className="scene-title">
              <span>Scene</span> {scene.title}
            </h2>

            <div className="scene-card">
              <p>{scene.description}</p>
              <div className="dialogue" aria-label="संवाद">
                {scene.dialogues.map((dialogue, index) => (
                  <div
                    key={`${scene.id}-dialogue-${index}`}
                    className={`dialogue-line${
                      dialogue.variant === "narrator" ? " narrator" : ""
                    }`}
                  >
                    <div className="dialogue-speaker">{dialogue.speaker}</div>
                    {dialogue.lines.map((line, lineIndex) => (
                      <p key={`${scene.id}-line-${lineIndex}`}>{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className="footer-note">
        यह शुरुआती दृश्य आनंदगढ़ में आने वाले तूफान से पहले की अंतिम
        खुशियों को दर्शाता है। राज्य की कहानी को आगे बढ़ाने के लिए और पात्रों
        की झलकियाँ जोड़ें, ताकि दर्शक आर्या और वीर की यात्रा के हर मोड़ को महसूस
        कर सकें।
      </footer>
    </main>
  );
}
