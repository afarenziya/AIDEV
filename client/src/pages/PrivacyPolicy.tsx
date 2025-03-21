import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function PrivacyPolicy() {
  return (
    <motion.div
      className="container mx-auto py-16 px-4 md:px-6 lg:px-8 max-w-4xl"
      initial="hidden"
      animate="show"
      variants={fadeIn("up")}
    >
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
        गोपनीयता नीति
      </h1>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg mb-6">
          अंतिम अपडेट: 21 मार्च, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. परिचय</h2>
          <p>
            AIDEV ("हम", "हमारा", या "हमें") आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध है। यह गोपनीयता नीति बताती है कि हम आपके व्यक्तिगत डेटा को कैसे एकत्र, उपयोग और साझा करते हैं जब आप हमारी वेबसाइट (yourwebsite.com) का उपयोग करते हैं और हमारी सेवाओं का लाभ उठाते हैं।
          </p>
          <p>
            इस नीति को पढ़ने के लिए समय निकालने के लिए धन्यवाद। यदि आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. हम कौन सी जानकारी एकत्र करते हैं</h2>
          <p>
            हम निम्नलिखित प्रकार की जानकारी एकत्र कर सकते हैं:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>व्यक्तिगत पहचान जानकारी:</strong> नाम, ईमेल पता, फोन नंबर, और अन्य संपर्क जानकारी जो आप हमें प्रदान करते हैं।
            </li>
            <li>
              <strong>उपयोग डेटा:</strong> IP पता, ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम, पृष्ठ दृश्य, वेबसाइट पर बिताया गया समय, और अन्य नेविगेशन जानकारी।
            </li>
            <li>
              <strong>कुकीज़ और समान प्रौद्योगिकियां:</strong> हम आपके अनुभव को बेहतर बनाने और हमारी सेवाओं को अनुकूलित करने के लिए कुकीज़ और समान ट्रैकिंग प्रौद्योगिकियों का उपयोग कर सकते हैं।
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. हम आपकी जानकारी का उपयोग कैसे करते हैं</h2>
          <p>
            हम आपकी जानकारी का उपयोग निम्नलिखित उद्देश्यों के लिए कर सकते हैं:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>हमारी वेबसाइट और सेवाओं को प्रदान और बनाए रखने के लिए</li>
            <li>आपके प्रश्नों और अनुरोधों का जवाब देने के लिए</li>
            <li>हमारी सेवाओं में सुधार और अनुकूलन के लिए</li>
            <li>ईमेल, टेक्स्ट संदेश, या अन्य संचार माध्यमों से आपसे संपर्क करने के लिए</li>
            <li>धोखाधड़ी की गतिविधियों और दुर्भावनापूर्ण व्यवहार को रोकने के लिए</li>
            <li>लागू कानूनों और विनियमों का अनुपालन सुनिश्चित करने के लिए</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. जानकारी साझाकरण और प्रकटीकरण</h2>
          <p>
            हम आपकी व्यक्तिगत जानकारी को केवल निम्नलिखित परिस्थितियों में साझा कर सकते हैं:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>आपकी सहमति के साथ</li>
            <li>हमारे सेवा प्रदाताओं और भागीदारों के साथ जो हमारे लिए विशिष्ट कार्य करते हैं</li>
            <li>कानूनी आवश्यकताओं का अनुपालन करने के लिए</li>
            <li>हमारे अधिकारों, संपत्ति, या सुरक्षा की रक्षा के लिए</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. आपके अधिकार</h2>
          <p>
            आपके निवास के आधार पर, आपके पास अपने व्यक्तिगत डेटा के संबंध में विशिष्ट अधिकार हो सकते हैं:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>अपने डेटा तक पहुंचने और इसकी प्रति प्राप्त करने का अधिकार</li>
            <li>अपने डेटा को सही करने या अपडेट करने का अधिकार</li>
            <li>अपने डेटा को हटाने का अधिकार</li>
            <li>अपने डेटा के प्रसंस्करण को प्रतिबंधित करने का अधिकार</li>
            <li>डेटा पोर्टेबिलिटी का अधिकार</li>
            <li>प्रसंस्करण के खिलाफ आपत्ति करने का अधिकार</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. सुरक्षा</h2>
          <p>
            हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए उचित तकनीकी और संगठनात्मक उपाय लागू करते हैं। हालांकि, इंटरनेट पर कोई भी संचार पूरी तरह से सुरक्षित नहीं है, इसलिए हम 100% सुरक्षा की गारंटी नहीं दे सकते।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. नीति में परिवर्तन</h2>
          <p>
            हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। सबसे हालिया संस्करण हमेशा इस पृष्ठ पर पोस्ट किया जाएगा, जिसमें प्रभावी तिथि शामिल होगी।
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. संपर्क करें</h2>
          <p>
            यदि आपके पास इस गोपनीयता नीति के बारे में कोई प्रश्न या चिंता है, तो कृपया हमसे संपर्क करें:
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