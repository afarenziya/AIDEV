import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function CookiePolicy() {
  return (
    <motion.div
      className="container mx-auto py-16 px-4 md:px-6 lg:px-8 max-w-4xl"
      initial="hidden"
      animate="show"
      variants={fadeIn("up")}
    >
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
        कुकी नीति
      </h1>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg mb-6">
          अंतिम अपडेट: 21 मार्च, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. परिचय</h2>
          <p>
            यह कुकी नीति बताती है कि AIDEV ("हम", "हमारा", या "हमें") हमारी वेबसाइट yourwebsite.com ("वेबसाइट") पर कुकीज़ और समान तकनीकों का उपयोग कैसे करता है। जब आप हमारी वेबसाइट पर पहली बार जाते हैं, तो हम आपको कुकीज़ के बारे में सूचित करेंगे और आपकी सहमति मांगेंगे। यह नीति आपको यह समझने में मदद करेगी कि हम कौन सी कुकीज़ का उपयोग करते हैं और क्यों, और आप इन्हें कैसे नियंत्रित कर सकते हैं।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. कुकीज़ क्या हैं?</h2>
          <p>
            कुकीज़ छोटी टेक्स्ट फाइलें हैं जो आपके उपकरण (कंप्यूटर, मोबाइल फोन या टैबलेट) पर रखी जाती हैं जब आप वेबसाइट पर जाते हैं। वे वेबसाइट के मालिकों को उपयोगकर्ताओं के अनुभव को बेहतर बनाने और वेबसाइट के प्रदर्शन को अनुकूलित करने में मदद करते हैं। कुकीज़ आपकी वेबसाइट पर गतिविधियों के बारे में जानकारी एकत्र और याद रखती हैं, जैसे लॉगिन करना या खरीदारी कार्ट में आइटम जोड़ना।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. हम किस प्रकार की कुकीज़ का उपयोग करते हैं</h2>
          <p>
            हम निम्नलिखित प्रकार की कुकीज़ का उपयोग करते हैं:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>आवश्यक कुकीज़:</strong> ये कुकीज़ हमारी वेबसाइट के कार्य करने के लिए आवश्यक हैं और हमारे सिस्टम में बंद नहीं की जा सकतीं। वे आमतौर पर केवल आपके द्वारा की गई कार्रवाइयों के जवाब में सेट की जाती हैं, जैसे गोपनीयता प्राथमिकताओं को सेट करना, लॉगिन करना, या फॉर्म भरना।
            </li>
            <li>
              <strong>प्रदर्शन कुकीज़:</strong> ये कुकीज़ हमें विज़िटर की संख्या और ट्रैफिक के स्रोत की गणना करके वेबसाइट के प्रदर्शन को मापने और सुधारने की अनुमति देती हैं। वे हमें यह समझने में मदद करती हैं कि कौन से पृष्ठ सबसे अधिक और सबसे कम लोकप्रिय हैं और विज़िटर वेबसाइट पर कैसे नेविगेट करते हैं।
            </li>
            <li>
              <strong>कार्यात्मक कुकीज़:</strong> ये कुकीज़ वेबसाइट को उन्नत कार्यक्षमता और व्यक्तिगतकरण प्रदान करने की अनुमति देती हैं, जैसे वीडियो और लाइव चैट। वे हमारे द्वारा या तीसरे पक्ष के सेवा प्रदाताओं द्वारा सेट की जा सकती हैं जिन्हें हमने अपने पृष्ठों पर जोड़ा है।
            </li>
            <li>
              <strong>लक्षित कुकीज़:</strong> ये कुकीज़ हमारे विज्ञापन भागीदारों द्वारा सेट की जा सकती हैं। इनका उपयोग ये कंपनियां आपकी रुचियों का प्रोफाइल बनाने और आपको अन्य साइटों पर प्रासंगिक विज्ञापन दिखाने के लिए कर सकती हैं।
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. हम कुकीज़ का उपयोग क्यों करते हैं</h2>
          <p>
            हम कुकीज़ का उपयोग निम्नलिखित उद्देश्यों के लिए करते हैं:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>वेबसाइट के कार्य को सुनिश्चित करने के लिए</li>
            <li>उपयोगकर्ता अनुभव को अनुकूलित करने के लिए</li>
            <li>वेबसाइट के प्रदर्शन और प्रभावशीलता का विश्लेषण करने के लिए</li>
            <li>हमारे मार्केटिंग प्रयासों को अनुकूलित करने के लिए</li>
            <li>धोखाधड़ी गतिविधियों को रोकने और सुरक्षा सुनिश्चित करने के लिए</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. अपनी कुकी प्राथमिकताओं को कैसे प्रबंधित करें</h2>
          <p>
            अधिकांश वेब ब्राउज़र कुकीज़ को स्वीकार करने के लिए डिफ़ॉल्ट रूप से सेट किए गए हैं। आप अपने ब्राउज़र की सेटिंग्स में बदलाव करके कुकीज़ को स्वीकार या अस्वीकार करने के लिए अपने ब्राउज़र को कॉन्फ़िगर कर सकते हैं। हालांकि, अगर आप कुकीज़ को अक्षम करते हैं, तो हमारी वेबसाइट के कुछ हिस्से ठीक से काम नहीं कर सकते हैं।
          </p>
          <p className="mt-4">
            आप निम्नलिखित लिंक पर जाकर अपने ब्राउज़र में कुकीज़ को प्रबंधित कर सकते हैं:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Microsoft Edge</a></li>
            <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Safari</a></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. तीसरे पक्ष की कुकीज़</h2>
          <p>
            हमारी वेबसाइट पर तीसरे पक्ष के सेवा प्रदाताओं द्वारा भी कुकीज़ सेट की जा सकती हैं। इनमें एनालिटिक्स सेवाएं (जैसे Google Analytics), सोशल मीडिया प्लेटफॉर्म और विज्ञापन नेटवर्क शामिल हो सकते हैं। ये तीसरे पक्ष की कुकीज़ उनके गोपनीयता नीतियों के अधीन हैं, और हम आपको उनकी गोपनीयता नीतियों की समीक्षा करने के लिए प्रोत्साहित करते हैं।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. नीति में परिवर्तन</h2>
          <p>
            हम समय-समय पर इस कुकी नीति को अपडेट कर सकते हैं। जब हम ऐसा करते हैं, तो हम इस पृष्ठ पर संशोधित नीति पोस्ट करेंगे। हमारी वेबसाइट का उपयोग जारी रखकर, आप इन परिवर्तनों को स्वीकार करते हैं।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. संपर्क करें</h2>
          <p>
            यदि आपके पास इस कुकी नीति के बारे में कोई प्रश्न या चिंता है, तो कृपया हमसे संपर्क करें:
          </p>
          <div className="mt-4">
            <p><strong>ईमेल:</strong> afarenziya@gmail.com</p>
            <p><strong>पता:</strong> 85 SD-II, ग्रेटर नोएडा वेस्ट, गौतम बुद्ध नगर, यूपी, भारत</p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}