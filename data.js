let mustExclude = [
    14, 41, 16, 61, 18, 81, 23, 32, 26, 62, 27, 72, 28, 82, 34, 43, 45, 54,
    46, 64, 48, 84, 67, 76, 68, 86, 89, 98, 36, 63, 49, 94, 58, 85, 99, 999,
    88, 888, 77, 777, 666, 555, 444, 44, 333, 22, 222, 111,
];

// Google Bard rephrased english

const englishArr = [
    {
        combo: 11,
        effect:
            "Emotional, prideful, with a strong attitude. Talks quickly and communicates well.",
        type: 1,
    },
    {
        combo: 22,
        effect:
            "Experiences mood swings, depression, and strong emotions. May have blood pressure problems. If your name starts with B, K, or R, emotional issues are even more likely.",
        type: 0,
    },
    {
        combo: 33,
        effect: "Curious and eager to learn, but can be impractical.",
        type: 2,
    },
    {
        combo: 44,
        effect: "May experience delays, struggles, and headaches.",
        type: 0,
    },
    {
        combo: 55,
        effect:
            "May be lazy or sluggish, but communication and money flow can improve.",
        type: 1,
    },
    {
        combo: 66,
        effect:
            "Enjoys luxury and travel, but may not always have what they need on hand.",
        type: 1,
    },
    {
        combo: 77,
        effect:
            "Experiences mood swings, inner turmoil, and may be drawn to spirituality. May overthink and feel anxious.",
        type: 0,
    },
    {
        combo: 88,
        effect: "May face delays, disruptions, and obstacles.",
        type: 0,
    },
    {
        combo: 99,
        effect:
            "May struggle with debt, anger, and blood-related issues. May have a reddish skin tone. Children can also have this combination.",
        type: 0,
    },

    // upper to be checked

    {
        combo: 12,
        effect: "Looks good, Saves money, Good spouse",
        type: 1,
    },
    {
        combo: "13",
        effect:
            "Gives good advice, Well-educated, Well-respected, Popular, Stands out in their group, 31 combo makes them professional",
        type: 1,
    },
    {
        combo: 31,
        effect:
            "Gives good advice, Well-educated, Well-respected, Popular, Stands out in their group, 31 combo makes them professional",
        type: 1,
    },
    {
        combo: 15,
        effect: "Makes their father well-known (for good reasons)",
        type: 1,
    },
    {
        combo: 51,
        effect: "Makes their father well-known (for good reasons)",
        type: 1,
    },
    {
        combo: 25,
        effect:
            "Can work in mysterious studies/medicine, Helps others in trouble, Travels by air for success, Avoid finance-related things.",
        type: 1,
    },
    {
        combo: 52,
        effect:
            "Can work in mysterious studies/medicine, Helps others in trouble, Travels by air for success, Avoid finance-related things.",
        type: 1,
    },
    {
        combo: 29,
        effect:
            "Has good money, Lives comfortably on someone else's money (be careful of ego), Relationship issues if born on 29th, Travels by air for success, Avoid finance-related things.",
        type: 1,
    },
    {
        combo: 92,
        effect:
            "Has good money, Lives comfortably on someone else's money (be careful of ego), Relationship issues if born on 29th, Travels by air for success, Avoid finance-related things.",
        type: 1,
    },
    {
        combo: 73,
        effect:
            "Well-rounded person, Learns well and uses knowledge to their advantage.",
        type: 1,
    },
    {
        combo: 37,
        effect:
            "Well-rounded person, Learns well and uses knowledge to their advantage.",
        type: 1,
    },
    {
        combo: 38,
        effect:
            "Good at real estate, Advises others, Settles disputes between people.",
        type: 1,
    },
    {
        combo: 83,
        effect:
            "Good at real estate, Advises others, Settles disputes between people.",
        type: 1,
    },
    {
        combo: 47,
        effect: "Honest, Intelligent, Values integrity (Rahu-Ketu Combo)",
        type: 1,
    },
    {
        combo: 74,
        effect: "Honest, Intelligent, Values integrity (Rahu-Ketu Combo)",
        type: 1,
    },
    {
        combo: 57,
        effect:
            "Good communicator, Can be a writer or public speaker, People seek advice from them.",
        type: 1,
    },
    {
        combo: 75,
        effect:
            "Good communicator, Can be a writer or public speaker, People seek advice from them.",
        type: 1,
    },
    {
        combo: 69,
        effect:
            "Good at managing things, Makes plans well, Might be attracted to the opposite sex.",
        type: 1,
    },
    {
        combo: 96,
        effect:
            "Good at managing things, Makes plans well, Might be attracted to the opposite sex.",
        type: 1,
    },
    {
        combo: 78,
        effect: "Can heal others, idealistic, Solves problems independently.",
        type: 1,
    },
    {
        combo: 87,
        effect: "Can heal others, idealistic, Solves problems independently.",
        type: 1,
    },

    // Neutral
    {
        combo: 17,
        effect:
            "Steady income, Someone close in government job, Might work in MNC with good benefits (work from home possible), Chance of two marriages, Lying might bring more profit, Avoid if DOB has many 7s, Avoid if DOB lacks 2, 5, 6 and mobile number has 17/71 (relationship issues)",
        type: 2,
    },
    {
        combo: 71,
        effect:
            "Steady income, Someone close in government job, Might work in MNC with good benefits (work from home possible), Chance of two marriages, Lying might bring more profit, Avoid if DOB has many 7s, Avoid if DOB lacks 2, 5, 6 and mobile number has 17/71 (relationship issues)",
        type: 2,
    },
    {
        combo: 19,
        effect:
            "Achieves goals, High position, Professional, Dominant, Passionate lover",
        type: 1,
    },
    {
        combo: 91,
        effect:
            "Achieves goals, High position, Professional, Dominant, Passionate lover",
        type: 1,
    },
    {
        combo: 21,
        effect: "Looks good, Might spend money carelessly",
        type: 2,
    },
    {
        combo: 24,
        effect:
            "Needs patience to be successful, Makes many plans, Can be prone to negative thinking",
        type: 2,
    },
    {
        combo: 42,
        effect:
            "Needs patience to be successful, Makes many plans, Can be prone to negative thinking",
        type: 2,
    },
    {
        combo: 35,
        effect:
            "Success away from home (due to fear of father?), Good financial situation, Might have trouble with cash flow.",
        type: 2,
    },
    {
        combo: 53,
        effect:
            "Success away from home (due to fear of father?), Good financial situation, Might have trouble with cash flow.",
        type: 2,
    },
    {
        combo: 63,
        effect:
            "Prefers principles, Might face obstacles in studies, Has good knowledge but struggles to present it well.",
        type: 2,
    },
    {
        combo: 36,
        effect:
            "Prefers principles, Might face obstacles in studies, Has good knowledge but struggles to present it well.",
        type: 2,
    },
    {
        combo: 93,
        effect: "Likes to show off, Can be indecisive at times.",
        type: 2,
    },
    {
        combo: 39,
        effect: "Likes to show off, Can be indecisive at times.",
        type: 2,
    },
    {
        combo: 49,
        effect:
            "Might take risks, Could be suited for jobs with uniforms, Prone to criminal activity.",
        type: 2,
    },
    {
        combo: 94,
        effect:
            "Might take risks, Could be suited for jobs with uniforms, Prone to criminal activity.",
        type: 2,
    },
    {
        combo: 56,
        effect:
            "Might hesitate to ask for their own money. Business-minded. (Hindi: Any big landmarks near your house? Temple/Superstore)",
        type: 2,
    },
    {
        combo: 65,
        effect:
            "Might hesitate to ask for their own money. Business-minded. (Hindi: Any big landmarks near your house? Temple/Superstore)",
        type: 2,
    },
    {
        combo: 85,
        effect:
            "Might have financial difficulties, Good with calculations, Works in finance-related field, Talks in big sums (lakhs and crores).",
        type: 2,
    },
    {
        combo: 58,
        effect:
            "Might have financial difficulties, Good with calculations, Works in finance-related field, Talks in big sums (lakhs and crores).",
        type: 2,
    },
    {
        combo: 95,
        effect:
            "Harsh words can damage relationships. Might choose Science or Commerce stream for studies.",
        type: 2,
    },
    {
        combo: 59,
        effect:
            "Harsh words can damage relationships. Might choose Science or Commerce stream for studies.",
        type: 2,
    },
    {
        combo: 79,
        effect: "May find success after separation from father.",
        type: 2,
    },
    {
        combo: 97,
        effect: "May find success after separation from father.",
        type: 2,
    },
    {
        combo: 14,
        effect:
            "Prone to debt, legal issues, health problems. Requires hard work and resilience.",
        type: 0,
    },
    {
        combo: 41,
        effect:
            "Prone to debt, legal issues, health problems. Requires hard work and resilience.",
        type: 0,
    },
    {
        combo: 16,
        effect:
            "May face spouse's health issues, problems in married life, and limited income.",
        type: 0,
    },
    {
        combo: 61,
        effect:
            "May face spouse's health issues, problems in married life, and limited income.",
        type: 0,
    },
    {
        combo: 18,
        effect:
            "May face spouse's health issues, disagreements with father, government-related problems, and frequent job changes.",
        type: 0,
    },
    {
        combo: 81,
        effect:
            "May face spouse's health issues, disagreements with father, government-related problems, and frequent job changes.",
        type: 0,
    },
    {
        combo: 23,
        effect:
            "May have many enemies, but they won't be able to cause harm.",
        type: 0,
    },
    {
        combo: 32,
        effect:
            "May have many enemies, but they won't be able to cause harm.",
        type: 0,
    },
    {
        combo: 26,
        effect:
            "May experience educational delays, problems with mother-in-law, attraction towards money/opposite sex, and potential for low sperm count or diabetes.",
        type: 0,
    },
    {
        combo: 62,
        effect:
            "May experience educational delays, problems with mother-in-law, attraction towards money/opposite sex, and potential for low sperm count or diabetes.",
        type: 0,
    },
    {
        combo: 27,
        effect:
            "Good intuition, but may have joint pain, urinary problems, or arthritis.",
        type: 0,
    },
    {
        combo: 72,
        effect:
            "Good intuition, but may have joint pain, urinary problems, or arthritis.",
        type: 0,
    },
    {
        combo: 28,
        effect:
            "May have good income, but also high medical expenses. Two marriages possible in the family. Avoid bad company. (Vish yog)",
        type: 0,
    },
    {
        combo: 82,
        effect:
            "May have good income, but also high medical expenses. Two marriages possible in the family. Avoid bad company. (Vish yog)",
        type: 0,
    },
    {
        combo: 34,
        effect:
            "Leg tremors, risk of paralysis in the family, breathing problems. Avoid this combo if your date of birth has 3 or more eights.",
        type: 0,
    },
    {
        combo: 43,
        effect:
            "Leg tremors, risk of paralysis in the family, breathing problems. Avoid this combo if your date of birth has 3 or more eights.",
        type: 0,
    },
    {
        combo: 45,
        effect:
            "Frequent hospital visits for various health issues and court appearances for legal matters. Life with limitations.",
        type: 0,
    },
    {
        combo: 54,
        effect:
            "Frequent hospital visits for various health issues and court appearances for legal matters. Life with limitations.",
        type: 0,
    },
    {
        combo: 46,
        effect:
            "Indicates extramarital relationships, inter-caste marriage, and urinary tract infections.",
        type: 0,
    },
    {
        combo: 64,
        effect:
            "Indicates extramarital relationships, inter-caste marriage, and urinary tract infections.",
        type: 0,
    },
    {
        combo: 48,
        effect:
            "(Very Negative) Health problems related to blood, Serious health issues, Difficulty having a satisfying sex life.",
        type: 0,
    },
    {
        combo: 84,
        effect:
            "(Very Negative) Health problems related to blood, Serious health issues, Difficulty having a satisfying sex life.",
        type: 0,
    },
    {
        combo: 67,
        effect:
            "Increased chance of love marriage, Partner might have health problems, Possibility of troubled married life.",
        type: 0,
    },
    {
        combo: 76,
        effect:
            "Increased chance of love marriage, Partner might have health problems, Possibility of troubled married life.",
        type: 0,
    },
    {
        combo: 68,
        effect:
            "Possible eye problems, Potential health issue in a single organ. Avoid this combo if your date of birth has multiple '1's.",
        type: 0,
    },
    {
        combo: 86,
        effect:
            "Possible eye problems, Potential health issue in a single organ. Avoid this combo if your date of birth has multiple '1's.",
        type: 0,
    },
    {
        combo: 89,
        effect:
            "Likes to argue, Sticks to principles, Might develop chronic health problems later in life.",
        type: 0,
    },
    {
        combo: 98,
        effect:
            "Likes to argue, Sticks to principles, Might develop chronic health problems later in life.",
        type: 0,
    },
];

// Google Bard Translated Hindi

const hindiArr = [
    {
        combo: 11,
        effect:
            "भावुक, अभिमानी, दृढ़ रवैये वाला। जल्दी बात करता है और अच्छा संवाद करता है।",
        type: 1,
    },
    {
        combo: 22,
        effect:
            "मनोदशा में उतार-चढ़ाव, अवसाद और मजबूत भावनाओं का अनुभव करता है। रक्तचाप की समस्या हो सकती है। यदि आपका नाम B, K या R से शुरू होता है, तो भावनात्मक समस्याएं और भी होने की संभावना है।",
        type: 0,
    },
    {
        combo: 33,
        effect:
            "जिज्ञासु और सीखने के लिए उत्सुक, लेकिन अव्यावहारिक हो सकता है।",
        type: 2,
    },
    {
        combo: 44,
        effect: "देरी, संघर्ष और सिरदर्द का अनुभव हो सकता है।",
        type: 0,
    },
    {
        combo: 55,
        effect:
            "आलसी या सुस्त हो सकता है, लेकिन संचार और धन का प्रवाह बेहतर हो सकता है।",
        type: 1,
    },
    {
        combo: 66,
        effect:
            "विलासिता और यात्रा का आनंद लेता है, लेकिन हो सकता है कि हमेशा उसकी जरूरत की चीजें न हों।",
        type: 1,
    },
    {
        combo: 77,
        effect:
            "मनोदशा में उतार-चढ़ाव, आंतरिक उथलपुथल का अनुभव करता है, और आध्यात्म की ओर आकर्षित हो सकता है। जरूरत से ज्यादा सोच सकता है और चिंतित महसूस कर सकता है।",
        type: 0,
    },
    {
        combo: 88,
        effect: "देरी, व्यवधान और रुकावटों का सामना करना पड़ सकता है।",
        type: 0,
    },
    {
        combo: 99,
        effect:
            "ऋण, क्रोध और रक्त से संबंधित समस्याओं से जूझ सकता है। त्वचा का रंग लाल रंग का हो सकता है। बच्चों में भी यह संयोजन हो सकता है।",
        type: 0,
    },
    {
        combo: 12,
        effect: "आकर्षक दिखता है, पैसा बचाता है, अच्छा जीवनसाथी मिलता है",
        type: 1,
    },
    {
        combo: 13,
        effect:
            "अच्छी सलाह देता है, अच्छी शिक्षा प्राप्त करता है, सम्मानित और लोकप्रिय होता है, अपने समूह में अलग पहचान बनाता है, 31 का कॉम्बो इन्हें पेशेवर बनाता है",
        type: 1,
    },
    {
        combo: 31,
        effect:
            "अच्छी सलाह देता है, अच्छी शिक्षा प्राप्त करता है, सम्मानित और लोकप्रिय होता है, अपने समूह में अलग पहचान बनाता है, 31 का कॉम्बो इन्हें पेशेवर बनाता है",
        type: 1,
    },
    {
        combo: 15,
        effect: "पिता को प्रसिद्ध बनाता है (अच्छे कार्यों के लिए)",
        type: 1,
    },
    {
        combo: 51,
        effect: "पिता को प्रसिद्ध बनाता है (अच्छे कार्यों के लिए)",
        type: 1,
    },
    {
        combo: 25,
        effect:
            "ज्योतिष / चिकित्सा विज्ञान में काम कर सकता है, दूसरों की मदद करता है, सफलता के लिए हवाई यात्रा करता है, वित्त से जुड़े मामलों से बचें।",
        type: 1,
    },
    {
        combo: 52,
        effect:
            "ज्योतिष / चिकित्सा विज्ञान में काम कर सकता है, दूसरों की मदद करता है, सफलता के लिए हवाई यात्रा करता है, वित्त से जुड़े मामलों से बचें।",
        type: 1,
    },
    {
        combo: 29,
        effect:
            "अच्छा पैसा होता है, दूसरों के पैसों से आराम से रहता है (अहंकार से सावधान रहें), 29 तारीख को जन्मे लोगों के लिए संबंध संबंधी समस्याएं, सफलता के लिए हवाई यात्रा करता है, वित्त से जुड़े मामलों से बचें।",
        type: 1,
    },
    {
        combo: 92,
        effect:
            "अच्छा पैसा होता है, दूसरों के पैसों से आराम से रहता है (अहंकार से सावधान रहें), 29 तारीख को जन्मे लोगों के लिए संबंध संबंधी समस्याएं, सफलता के लिए हवाई यात्रा करता है, वित्त से जुड़े मामलों से बचें।",
        type: 1,
    },
    {
        combo: 73,
        effect: "संपूर्ण व्यक्तित्व, ज्ञान का लाभ उठाने में सक्षम होगा।",
        type: 1,
    },
    {
        combo: 37,
        effect: "संपूर्ण व्यक्तित्व, ज्ञान का लाभ उठाने में सक्षम होगा।",
        type: 1,
    },
    {
        combo: 38,
        effect:
            "रियल एस्टेट में अच्छा, सलाह देता है, लोगों के बीच विवाद सुलझाता है।",
        type: 1,
    },
    {
        combo: 83,
        effect:
            "रियल एस्टेट में अच्छा, सलाह देता है, लोगों के बीच विवाद सुलझाता है।",
        type: 1,
    },
    {
        combo: 47,
        effect:
            "ईमानदार, बुद्धिमान, सत्यनिष्ठा को महत्व देता है (राहु-केतु कॉम्बो)",
        type: 1,
    },
    {
        combo: 74,
        effect:
            "ईमानदार, बुद्धिमान, सत्यनिष्ठा को महत्व देता है (राहु-केतु कॉम्बो)",
        type: 1,
    },
    {
        combo: 57,
        effect:
            "अच्छे वक्ता, लेखक या सार्वजनिक वक्ता हो सकते हैं, लोग उनसे सलाह लेते हैं।",
        type: 1,
    },
    {
        combo: 75,
        effect:
            "अच्छे वक्ता, लेखक या सार्वजनिक वक्ता हो सकते हैं, लोग उनसे सलाह लेते हैं।",
        type: 1,
    },
    {
        combo: 69,
        effect:
            "चीजों को मैनेज करने में अच्छा, अच्छी योजना बनाता है, विपरीत लिंग के प्रति आकर्षित हो सकता है।",
        type: 1,
    },
    {
        combo: 96,
        effect:
            "चीजों को मैनेज करने में अच्छा, अच्छी योजना बनाता है, विपरीत लिंग के प्रति आकर्षित हो सकता है।",
        type: 1,
    },
    {
        combo: 78,
        effect:
            "दूसरों को ठीक कर सकता है, आदर्शवादी, स्वतंत्र रूप से समस्याओं का समाधान करता है।",
        type: 1,
    },
    {
        combo: 87,
        effect:
            "दूसरों को ठीक कर सकता है, आदर्शवादी, स्वतंत्र रूप से समस्याओं का समाधान करता है।",
        type: 1,
    },
    // Neutral
    {
        combo: 17,
        effect:
            "स्थिर आय, सरकारी नौकरी में कोई करीबी, अच्छी सुविधाओं के साथ MNC में काम कर सकता है (घर से काम करना संभव), दो शादियों का मौका, झूठ बोलने से अधिक लाभ हो सकता है, अगर जन्म तिथि में बहुत सारे 7 हैं तो बचें, अगर जन्म तिथि में 2, 5, 6 की कमी है और मोबाइल नंबर में 17/71 है तो बचें (रिश्ते के मुद्दे)",
        type: 2,
    },
    {
        combo: 71,
        effect:
            "स्थिर आय, सरकारी नौकरी में कोई करीबी, अच्छी सुविधाओं के साथ MNC में काम कर सकता है (घर से काम करना संभव), दो शादियों का मौका, झूठ बोलने से अधिक लाभ हो सकता है, अगर जन्म तिथि में बहुत सारे 7 हैं तो बचें, अगर जन्म तिथि में 2, 5, 6 की कमी है और मोबाइल नंबर में 17/71 है तो बचें (रिश्ते के मुद्दे)",
        type: 2,
    },
    {
        combo: 19,
        effect:
            "लक्ष्य प्राप्त करता है, उच्च पद, पेशेवर, प्रभावशाली, भावुक प्रेमी",
        type: 1,
    },
    {
        combo: 91,
        effect:
            "लक्ष्य प्राप्त करता है, उच्च पद, पेशेवर, प्रभावशाली, भावुक प्रेमी",
        type: 1,
    },
    {
        combo: 21,
        effect:
            " आकर्षक व्यक्ति, हो सकता है, पैसा बिना सोचे समझे खर्च कर सकता है",
        type: 2,
    },
    {
        combo: 24,
        effect:
            "सफल होने के लिए धैर्य की आवश्यकता होती है, कई योजनाएँ बनाता है, नकारात्मक सोच का शिकार हो सकता है",
        type: 2,
    },
    {
        combo: 42,
        effect:
            "सफल होने के लिए धैर्य की आवश्यकता होती है, कई योजनाएँ बनाता है, नकारात्मक सोच का शिकार हो सकता है",
        type: 2,
    },
    {
        combo: 35,
        effect:
            "घर से दूर सफलता (पिता के डर के कारण?), अच्छी वित्तीय स्थिति, नकदी प्रवाह में परेशानी हो सकती है।",
        type: 2,
    },
    {
        combo: 53,
        effect:
            "घर से दूर सफलता (पिता के डर के कारण?), अच्छी वित्तीय स्थिति, नकदी प्रवाह में परेशानी हो सकती है।",
        type: 2,
    },
    {
        combo: 63,
        effect:
            "सिद्धांतों को तरजीह देता है, पढ़ाई में रुकावटों का सामना करना पड़ सकता है, अच्छा ज्ञान होता है लेकिन इसे अच्छी तरह से प्रस्तुत करने के लिए संघर्ष करता है।",
        type: 2,
    },
    {
        combo: 36,
        effect:
            "सिद्धांतों को तरजीह देता है, पढ़ाई में रुकावटों का सामना करना पड़ सकता है, अच्छा ज्ञान होता है लेकिन इसे अच्छी तरह से प्रस्तुत करने के लिए संघर्ष करता है।",
        type: 2,
    },
    {
        combo: 93,
        effect:
            "दिखावा करना पसंद करता है, कभी-कभी निर्णय लेने में असमंजस में रह सकता है।",
        type: 2,
    },
    {
        combo: 39,
        effect:
            "दिखावा करना पसंद करता है, कभी-कभी निर्णय लेने में असमंजस में रह सकता है।",
        type: 2,
    },
    {
        combo: 49,
        effect:
            "जोखिम उठा सकता है, वर्दी वाली नौकरी के लिए उपयुक्त हो सकता है, अपराधिक गतिविधियों की ओर झुकाव।",
        type: 2,
    },
    {
        combo: 94,
        effect:
            "जोखिम उठा सकता है, वर्दी वाली नौकरी के लिए उपयुक्त हो सकता है, अपराधिक गतिविधियों की ओर झुकाव।",
        type: 2,
    },
    {
        combo: 56,
        effect:
            "अपने पैसे मांगने में संकोच कर सकता है। व्यापारिक दिमाग। आपके घर के पास कोई बड़ा लैंडमार्क (मंदिर/सुपरस्टोर) हो सकता है।",
        type: 2,
    },
    {
        combo: 65,
        effect:
            "अपने पैसे मांगने में संकोच कर सकता है। व्यापारिक दिमाग। आपके घर के पास कोई बड़ा लैंडमार्क (मंदिर/सुपरस्टोर) हो सकता है।",
        type: 2,
    },
    {
        combo: 85,
        effect:
            "धन की कमी हो सकती है, गणना करने में अच्छा है, वित्त से संबंधित क्षेत्र में काम करता है, बड़ी रकम (लाखों और करोड़ों) के बारे में बात करता है।",
        type: 2,
    },
    {
        combo: 58,
        effect:
            "धन की कमी हो सकती है, गणना करने में अच्छा है, वित्त से संबंधित क्षेत्र में काम करता है, बड़ी रकम (लाखों और करोड़ों) के बारे में बात करता है।",
        type: 2,
    },
    {
        combo: 95,
        effect:
            "कठोर शब्द रिश्तों को नुकसान पहुंचा सकते हैं। शिक्षा के लिए विज्ञान या वाणिज्य धारा चुन सकते हैं।",
        type: 2,
    },
    {
        combo: 59,
        effect:
            "कठोर शब्द रिश्तों को नुकसान पहुंचा सकते हैं। शिक्षा के लिए विज्ञान या वाणिज्य धारा चुन सकते हैं।",
        type: 2,
    },
    {
        combo: 79,
        effect: "पिता से अलग होने के बाद सफलता मिल सकती है।",
        type: 2,
    },
    {
        combo: 97,
        effect: "पिता से अलग होने के बाद सफलता मिल सकती है।",
        type: 2,
    },
    {
        combo: 14,
        effect:
            "कर्ज, कानूनी मुद्दों, स्वास्थ्य समस्याओं से ग्रस्त हो सकता है। कड़ी मेहनत और लचीलेपन की आवश्यकता है।",
        type: 0,
    },
    {
        combo: 41,
        effect:
            "कर्ज, कानूनी मुद्दों, स्वास्थ्य समस्याओं से ग्रस्त हो सकता है। कड़ी मेहनत और लचीलेपन की आवश्यकता है।",
        type: 0,
    },
    {
        combo: 16,
        effect:
            "जीवनसाथी के स्वास्थ्य संबंधी समस्याओं, वैवाहिक जीवन में समस्याओं और सीमित आय का सामना करना पड़ सकता है।",
        type: 0,
    },
    {
        combo: 61,
        effect:
            "जीवनसाथी के स्वास्थ्य संबंधी समस्याओं, वैवाहिक जीवन में समस्याओं और सीमित आय का सामना करना पड़ सकता है।",
        type: 0,
    },
    {
        combo: 18,
        effect:
            "जीवनसाथी के स्वास्थ्य संबंधी समस्याओं, पिता के साथ असहमति, सरकारी संबंधित समस्याओं और बार-बार नौकरी बदलने का सामना करना पड़ सकता है।",
        type: 0,
    },
    {
        combo: 81,
        effect:
            "जीवनसाथी के स्वास्थ्य संबंधी समस्याओं, पिता के साथ असहमति, सरकारी संबंधित समस्याओं और बार-बार नौकरी बदलने का सामना करना पड़ सकता है।",
        type: 0,
    },
    {
        combo: 23,
        effect:
            "बहुत सारे दुश्मन हो सकते हैं, लेकिन वे नुकसान नहीं पहुंचा पाएंगे।",
        type: 0,
    },
    {
        combo: 32,
        effect:
            "बहुत सारे दुश्मन हो सकते हैं, लेकिन वे नुकसान नहीं पहुंचा पाएंगे।",
        type: 0,
    },
    {
        combo: 26,
        effect:
            "शिक्षा में देरी, सास के साथ समस्या, धन/विपरीत लिंग के प्रति आकर्षण, शुक्राणुओं की संख्या कम होने या मधुमेह की संभावना का सामना करना पड़ सकता है।",
        type: 0,
    },
    {
        combo: 62,
        effect:
            "शिक्षा में देरी, सास के साथ समस्या, धन/विपरीत लिंग के प्रति आकर्षण, शुक्राणुओं की संख्या कम होने या मधुमेह की संभावना।",
        type: 0,
    },
    {
        combo: 27,
        effect:
            "अच्छा अंतर्ज्ञान, लेकिन जोड़ों में दर्द, पेशाब संबंधी समस्याएं या गठिया हो सकती है।",
        type: 0,
    },
    {
        combo: 72,
        effect:
            "अच्छा अंतर्ज्ञान, लेकिन जोड़ों में दर्द, पेशाब संबंधी समस्याएं या गठिया हो सकती है।",
        type: 0,
    },
    {
        combo: 28,
        effect:
            "अच्छी आय हो सकती है, लेकिन साथ ही उच्च चिकित्सा व्यय भी हो सकते हैं। परिवार में दो विवाह संभव हैं। बुरी संगति से बचें। (विष योग)",
        type: 0,
    },
    {
        combo: 82,
        effect:
            "अच्छी आय हो सकती है, लेकिन साथ ही उच्च चिकित्सा व्यय भी हो सकते हैं। परिवार में दो विवाह संभव हैं। बुरी संगति से बचें। (विष योग)",
        type: 0,
    },
    {
        combo: 34,
        effect:
            "पैरों में कंपन, परिवार में किसी को लकवा का जोखिम, सांस लेने में समस्या। अगर आपकी जन्मतिथि में 3 या उससे अधिक अंक 8 हैं तो इस कॉम्बो को लेने से बचें।",
        type: 0,
    },
    {
        combo: 43,
        effect:
            "पैरों में कंपन, परिवार में किसी को लकवा का जोखिम, सांस लेने में समस्या। अगर आपकी जन्मतिथि में 3 या उससे अधिक अंक 8 हैं तो इस कॉम्बो को लेने से बचें।",
        type: 0,
    },
    {
        combo: 45,
        effect:
            " विभिन्न स्वास्थ्य समस्याओं के लिए अस्पताल के बार-बार दौरे और कानूनी मामलों के लिए अदालत में पेशी। जीवन सीमाओं के साथ।",
        type: 0,
    },
    {
        combo: 54,
        effect:
            " विभिन्न स्वास्थ्य समस्याओं के लिए अस्पताल के बार-बार दौरे और कानूनी मामलों के लिए अदालत में पेशी। जीवन सीमाओं के साथ।",
        type: 0,
    },
    {
        combo: 46,
        effect:
            "विवाहेतर संबंध, अंतर-जातीय विवाह और मूत्र मार्ग संक्रमण का संकेत देता है।",
        type: 0,
    },
    {
        combo: 64,
        effect:
            "विवाहेतर संबंध, अंतर-जातीय विवाह और मूत्र मार्ग संक्रमण का संकेत देता है।",
        type: 0,
    },
    {
        combo: 48,
        effect:
            "(बहुत नकारात्मक) रक्त से संबंधित स्वास्थ्य समस्याएं, गंभीर स्वास्थ्य समस्याएं, संतोषजनक यौन जीवन में कठिनाई।",
        type: 0,
    },
    {
        combo: 84,
        effect:
            "(बहुत नकारात्मक) रक्त से संबंधित स्वास्थ्य समस्याएं, गंभीर स्वास्थ्य समस्याएं, संतोषजनक यौन जीवन में कठिनाई।",
        type: 0,
    },
    {
        combo: 67,
        effect:
            "लव मैरिज की संभावना बढ़ी, पार्टनर को स्वास्थ्य समस्या हो सकती है, परेशान वैवाहिक जीवन की संभावना।",
        type: 0,
    },
    {
        combo: 76,
        effect:
            "लव मैरिज की संभावना बढ़ी, पार्टनर को स्वास्थ्य समस्या हो सकती है, परेशान वैवाहिक जीवन की संभावना।",
        type: 0,
    },
    {
        combo: 68,
        effect:
            "आँखों में समस्या, शरीर के किसी एक अंग में संभावित स्वास्थ्य समस्या। अगर आपकी जन्मतिथि में कई '1' हैं तो इस कॉम्बो को लेने से बचें।",
        type: 0,
    },
    {
        combo: 86,
        effect:
            "आंखों में समस्या हो सकती है, शरीर के किसी एक अंग में स्वास्थ्य संबंधी समस्या होने की संभावना। जन्मतिथि में यदि कई '1' हों तो इस कॉम्बो को लेने से बचें।",
        type: 0,
    },
    {
        combo: 89,
        effect:
            "बहस करना पसंद है, सिद्धांतों पर चलता है, जीवन के अंतिम चरण में कोई पुरानी बीमारी हो सकती है।",
        type: 0,
    },
    {
        combo: 98,
        effect:
            "बहस करना पसंद है, सिद्धांतों पर चलता है, जीवन के अंतिम चरण में कोई पुरानी बीमारी हो सकती है।",
        type: 0,
    },
];



// Chat GPT Translated

// const hindiArrr = [
//     {
//         combo: 11,
//         effect: "भावनात्मक, अहंकार, रवैया, संचार और तेज़ बोलना",
//         type: 1,
//     },
//     {
//         combo: 22,
//         effect:
//             "मूड स्विंग, डिप्रेशन, बहुत ज्यादा भावनात्मक, बीपी समस्या, नाम का आरंभ B, K, या R से हो तो 100% भावनात्मक समस्या",
//         type: 0,
//     },
//     {
//         combo: 33,
//         effect: "ज्ञान के लिए भूखा, कम आधारित",
//         type: 2,
//     },
//     {
//         combo: 44,
//         effect: "देरी, संघर्ष, सिरदर्द",
//         type: 0,
//     },
//     {
//         combo: 55,
//         effect: "सुस्त, आलसी, संचार और पैसे बढ़ सकते हैं",
//         type: 1,
//     },
//     {
//         combo: 66,
//         effect:
//             "शोभायात्रा प्रेमी, यात्रा, कभी-कभी जरूरत पर उपयोग करने की अनुमति नहीं",
//         type: 1,
//     },
//     {
//         combo: 77,
//         effect: "मूड स्विंग, आंतरिक बाधाएँ, आध्यात्मिकता, अत्यधिक सोच, चिंता",
//         type: 0,
//     },
//     {
//         combo: 88,
//         effect: "देरी, व्यवधान, अवरोध",
//         type: 0,
//     },
//     {
//         combo: 99,
//         effect:
//             "कर्ज, गुस्सा, रक्त संबंधी समस्याएँ, त्वचा का रंग लाल ध्वनि, बच्चे इस कॉम्बो को प्राप्त कर सकते हैं",
//         type: 0,
//     },
//     {
//         combo: 12,
//         effect: "आकर्षक चेहरा, बचाव करने वाला व्यक्ति, सहायक जीवन साथी",
//         type: 1,
//     },
//     {
//         combo: "13",
//         effect:
//             "अच्छे सलाहकार, अच्छी शिक्षा, सम्मानीय और लोकप्रिय, अपने चक्कर में विशेष, 31 का संयोजन व्यक्ति को पेशेवर बना देता है",
//         type: 1,
//     },
//     {
//         combo: 31,
//         effect:
//             "अच्छे सलाहकार, अच्छी शिक्षा, सम्मानीय और लोकप्रिय, अपने चक्कर में विशेष, 31 का संयोजन व्यक्ति को पेशेवर बना देता है",
//         type: 1,
//     },
//     {
//         combo: 15,
//         effect:
//             "पिता की पॉपुलैरिटी, आम तौर पर ये लोग अपने पिता को प्रसिद्ध करते हैं (अच्छे कारण के लिए)",
//         type: 1,
//     },
//     {
//         combo: 51,
//         effect:
//             "पिता की पॉपुलैरिटी, आम तौर पर ये लोग अपने पिता को प्रसिद्ध करते हैं (अच्छे कारण के लिए)",
//         type: 1,
//     },
//     {
//         combo: 25,
//         effect:
//             "हाथ में शफा, अन्धविश्वास विज्ञान/चिकित्सा लाइन में काम कर सकते हैं, अन्यों को जमाने वाला, हवाई यात्रा के माध्यम से सफलता, वित्त से संबंधित वस्तुओं से बचने का प्रयास करें।",
//         type: 1,
//     },
//     {
//         combo: 52,
//         effect:
//             "हाथ में शफा, अन्धविश्वास विज्ञान/चिकित्सा लाइन में काम कर सकते हैं, अन्यों को जमाने वाला, हवाई यात्रा के माध्यम से सफलता, वित्त से संबंधित वस्तुओं से बचने का प्रयास करें।",
//         type: 1,
//     },
//     {
//         combo: 29,
//         effect:
//             "व्यक्ति के पास समय की अच्छी मात्रा है, किसी अन्य के पैसे पर खुशहाल जीवन जीना, नेटिव अहंकारी हो सकता है, यदि जन्मतिथि 29 है तो संबंध संबंधी मुद्दे, हवाई यात्रा के माध्यम से सफलता, वित्त से संबंधित वस्तुओं से बचने का प्रयास करें।",
//         type: 1,
//     },
//     {
//         combo: 92,
//         effect:
//             "व्यक्ति के पास समय की अच्छी मात्रा है, किसी अन्य के पैसे पर खुशहाल जीवन जीना, नेटिव अहंकारी हो सकता है, यदि जन्मतिथि 29 है तो संबंध संबंधी मुद्दे, हवाई यात्रा के माध्यम से सफलता, वित्त से संबंधित वस्तुओं से बचने का प्रयास करें।",
//         type: 1,
//     },
//     {
//         combo: 73,
//         effect: "पूर्ण व्यक्तित्व, व्यक्ति ज्ञान से लाभ उठा सकेगा।",
//         type: 1,
//     },
//     {
//         combo: 37,
//         effect: "पूर्ण व्यक्तित्व, व्यक्ति ज्ञान से लाभ उठा सकेगा।",
//         type: 1,
//     },
//     {
//         combo: 38,
//         effect:
//             "रियल एस्टेट, सलाहकार, दो पक्षों के बीच शांति स्थापित करने वाला या मध्यस्थता करने वाला।",
//         type: 1,
//     },
//     {
//         combo: 83,
//         effect:
//             "रियल एस्टेट, सलाहकार, दो पक्षों के बीच शांति स्थापित करने वाला या मध्यस्थता करने वाला।",
//         type: 1,
//     },
//     {
//         combo: 47,
//         effect:
//             "ईमानदार, प्रतिभाशाली, अखंडता का महत्व देता है, राहु-केतु संयोजन।",
//         type: 1,
//     },
//     {
//         combo: 74,
//         effect:
//             "ईमानदार, प्रतिभाशाली, अखंडता का महत्व देता है, राहु-केतु संयोजन।",
//         type: 1,
//     },
//     {
//         combo: 57,
//         effect:
//             "वक्ता, लेखक, सार्वजनिक संबंध, अच्छे अभिव्यक्ति वाला व्यक्ति, बहुत सारे लोग उनसे सलाह के लिए आते हैं।",
//         type: 1,
//     },
//     {
//         combo: 75,
//         effect:
//             "वक्ता, लेखक, सार्वजनिक संबंध, अच्छे अभिव्यक्ति वाला व्यक्ति, बहुत सारे लोग उनसे सलाह के लिए आते हैं।",
//         type: 1,
//     },
//     {
//         combo: 69,
//         effect:
//             "अच्छा प्रबंधन कौशल, अच्छा योजनाकार, विपरीत लिंग का संलग्नता।",
//         type: 1,
//     },
//     {
//         combo: 96,
//         effect:
//             "अच्छा प्रबंधन कौशल, अच्छा योजनाकार, विपरीत लिंग का संलग्नता।",
//         type: 1,
//     },
//     {
//         combo: 78,
//         effect:
//             "चिकित्सक, आदर्शवादी, अपनी शक्ति से किसी भी समस्या का समाधान।",
//         type: 1,
//     },
//     {
//         combo: 87,
//         effect:
//             "चिकित्सक, आदर्शवादी, अपनी शक्ति से किसी भी समस्या का समाधान।",
//         type: 1,
//     },
//     {
//         combo: 17,
//         effect:
//             "पैसे से संबंधित काम कभी भी बंद नहीं होता, किसी को सर्किल में सरकारी नौकरी में होने वाला होता है, व्यक्ति MNC में काम कर रहा हो सकता है और अच्छी सुविधाएं प्राप्त कर रहा है जैसे कि निजी - अच्छी सुविधाएँ/गृह से काम, 2 विवाह के अवसर, झूठ बोलने से अधिक लाभ, जन्मतिथि में कई 7 हैं तो इस कॉम्बो को न चुनें, अगर जन्मतिथि में 2, 5, 6 गायब हैं और मोबाइल में 17/71 है तो प्रमुख संबंध समस्याएं होंगी।",
//         type: 2,
//     },
//     {
//         combo: 71,
//         effect:
//             "पैसे से संबंधित काम कभी भी बंद नहीं होता, किसी को सर्किल में सरकारी नौकरी में होने वाला होता है, व्यक्ति MNC में काम कर रहा हो सकता है और अच्छी सुविधाएं प्राप्त कर रहा है जैसे कि निजी - अच्छी सुविधाएँ/गृह से काम, 2 विवाह के अवसर, झूठ बोलने से अधिक लाभ, जन्मतिथि में कई 7 हैं तो इस कॉम्बो को न चुनें, अगर जन्मतिथि में 2, 5, 6 गायब हैं और मोबाइल में 17/71 है तो प्रमुख संबंध समस्याएं होंगी।",
//         type: 2,
//     },
//     {
//         combo: 19,
//         effect:
//             "आप जो भी चाहते हैं, उसका मालिक होते हैं, हमेशा ऊंची जगह पर होते हैं, पेशेवर व्यक्ति, रसुखदार, डॉम लवर।",
//         type: 1,
//     },
//     {
//         combo: 91,
//         effect:
//             "आप जो भी चाहते हैं, उसका मालिक होते हैं, हमेशा ऊंची जगह पर होते हैं, पेशेवर व्यक्ति, रसुखदार, डॉम लवर।",
//         type: 1,
//     },
//     {
//         combo: 21,
//         effect: "आकर्षक चेहरा, पैसे का अपव्यय।",
//         type: 2,
//     },
//     {
//         combo: 24,
//         effect:
//             "कुछ प्राप्त करने के लिए धैर्य बनाए रखें, विभिन्न योजनाएं बनाते हैं और दिमाग उन योजनाओं को सक्रिय रूप से प्रसंस्करण करता है, नकारात्मक/विनाशकारी सोच।",
//         type: 2,
//     },
//     {
//         combo: 42,
//         effect:
//             "कुछ प्राप्त करने के लिए धैर्य बनाए रखें, विभिन्न योजनाएं बनाते हैं और दिमाग उन योजनाओं को सक्रिय रूप से प्रसंस्करण करता है, नकारात्मक/विनाशकारी सोच।",
//         type: 2,
//     },
//     {
//         combo: 35,
//         effect:
//             "नेटिव को घर से दूर सफलता मिलती है, पिता का डर, इसलिए सफल, अच्छी आर्थिक स्थिति, तरल धन की समस्या।",
//         type: 2,
//     },
//     {
//         combo: 53,
//         effect:
//             "नेटिव को घर से दूर सफलता मिलती है, पिता का डर, इसलिए सफल, अच्छी आर्थिक स्थिति, तरल धन की समस्या।",
//         type: 2,
//     },
//     {
//         combo: 63,
//         effect:
//             "अधिकांश सिद्धांत उत्साहित व्यक्ति, अध्ययन में बाधा, अच्छा ज्ञान लेकिन नेटिव प्रस्तुति में संघर्ष करेगा।",
//         type: 2,
//     },
//     {
//         combo: 36,
//         effect:
//             "अधिकांश सिद्धांत उत्साहित व्यक्ति, अध्ययन में बाधा, अच्छा ज्ञान लेकिन नेटिव प्रस्तुति में संघर्ष करेगा।",
//         type: 2,
//     },
//     {
//         combo: 93,
//         effect:
//             "दिखावा करने का शौक, व्यक्ति की प्रकृति में बहुत सारी द्वैतता होगी।",
//         type: 2,
//     },
//     {
//         combo: 39,
//         effect:
//             "दिखावा करने का शौक, व्यक्ति की प्रकृति में बहुत सारी द्वैतता होगी।",
//         type: 2,
//     },
//     {
//         combo: 49,
//         effect: "जोखिमपूर्ण काम करें, वर्दी का काम, अपराधी मनोवृत्ति।",
//         type: 2,
//     },
//     {
//         combo: 94,
//         effect: "जोखिमपूर्ण काम करें, वर्दी का काम, अपराधी मनोवृत्ति।",
//         type: 2,
//     },
//     {
//         combo: 56,
//         effect:
//             "अपने पैसे के लिए हक मांगने में हिचकिचाहट, आपके घर के पास कोई बड़ा संकेत है क्या मंदिर/सुपरस्टोर, व्यवसाय मंदिर।",
//         type: 2,
//     },
//     {
//         combo: 65,
//         effect:
//             "अपने पैसे के लिए हक मांगने में हिचकिचाहट, आपके घर के पास कोई बड़ा संकेत है क्या मंदिर/सुपरस्टोर, व्यवसाय मंदिर।",
//         type: 2,
//     },
//     {
//         combo: 85,
//         effect:
//             "पैसे अटके, गणनात्मक मन, व्यक्ति कुछ ऐसा काम कर रहा है जो पैसे/वित्त से संबंधित है, लाखों और करोड़ों की बातें करता है।",
//         type: 2,
//     },
//     {
//         combo: 58,
//         effect:
//             "पैसे अटके, गणनात्मक मन, व्यक्ति कुछ ऐसा काम कर रहा है जो पैसे/वित्त से संबंधित है, लाखों और करोड़ों की बातें करता है।",
//         type: 2,
//     },
//     {
//         combo: 95,
//         effect:
//             "खराब भाषा के माध्यम से संबंध नष्ट करें, व्यक्ति विज्ञान या वाणिज्य धारा का चयन करता है।",
//         type: 2,
//     },
//     {
//         combo: 59,
//         effect:
//             "खराब भाषा के माध्यम से संबंध नष्ट करें, व्यक्ति विज्ञान या वाणिज्य धारा का चयन करता है।",
//         type: 2,
//     },
//     {
//         combo: 79,
//         effect: "पिता से अलग होने के बाद सफलता।",
//         type: 2,
//     },
//     {
//         combo: 97,
//         effect: "पिता से अलग होने के बाद सफलता।",
//         type: 2,
//     },
//     {
//         combo: 14,
//         effect:
//             "व्यक्ति ऋण दायित्व, कानूनी नोटिस, स्वास्थ्य समस्याएँ, कठिन काम, कठिनता नंबर को आकर्षित हो सकता है।",
//         type: 0,
//     },
//     {
//         combo: 41,
//         effect:
//             "व्यक्ति ऋण दायित्व, कानूनी नोटिस, स्वास्थ्य समस्याएँ, कठिन काम, कठिनता नंबर को आकर्षित हो सकता है।",
//         type: 0,
//     },
//     {
//         combo: 16,
//         effect:
//             "(सबसे नकारात्मक) पति के स्वास्थ्य समस्याएँ, विवाहित जीवन समस्याएँ, आय सीमित (मालिकों को इस महीने की संख्या के समय कम आय होती है)।",
//         type: 0,
//     },
//     {
//         combo: 61,
//         effect:
//             "(सबसे नकारात्मक) पति के स्वास्थ्य समस्याएँ, विवाहित जीवन समस्याएँ, आय सीमित (मालिकों को इस महीने की संख्या के समय कम आय होती है)।",
//         type: 0,
//     },
//     {
//         combo: 18,
//         effect:
//             "(बहुत नकारात्मक) पति के स्वास्थ्य समस्या, पिता और पुत्र में समझौता, सरकार संबंधित समस्या, नौकरी को बदलना बार-बार।",
//         type: 0,
//     },
//     {
//         combo: 81,
//         effect:
//             "(बहुत नकारात्मक) पति के स्वास्थ्य समस्या, पिता और पुत्र में समझौता, सरकार संबंधित समस्या, नौकरी को बदलना बार-बार।",
//         type: 0,
//     },
//     {
//         combo: 23,
//         effect:
//             "आमतौर पर कई दुश्मन होते हैं, लेकिन उनमें से कोई भी नेटिव को हानि नहीं पहुंचा सकता।",
//         type: 0,
//     },
//     {
//         combo: 32,
//         effect:
//             "आमतौर पर कई दुश्मन होते हैं, लेकिन उनमें से कोई भी नेटिव को हानि नहीं पहुंचा सकता।",
//         type: 0,
//     },
//     {
//         combo: 26,
//         effect:
//             "अध्ययन में बाधा या शिक्षा में विराम, लड़की- सास समस्या, पैसे या विपरीत लिंग की ओर आकर्षण, कम स्पर्म गिनती या मधुमेह के अवसर।",
//         type: 0,
//     },
//     {
//         combo: 62,
//         effect:
//             "अध्ययन में बाधा या शिक्षा में विराम, लड़की- सास समस्या, पैसे या विपरीत लिंग की ओर आकर्षण, कम स्पर्म गिनती या मधुमेह के अवसर।",
//         type: 0,
//     },
//     {
//         combo: 27,
//         effect:
//             "अच्छा अनुभव, जोड़ों में दर्द या मूत्र संबंधित बीमारी, गठिया (वात इस्यू)।",
//         type: 0,
//     },
//     {
//         combo: 72,
//         effect:
//             "अच्छा अनुभव, जोड़ों में दर्द या मूत्र संबंधित बीमारी, गठिया (वात इस्यू)।",
//         type: 0,
//     },
//     {
//         combo: 28,
//         effect:
//             "व्यक्ति के पास मामूली धन है, अत्यधिक चिकित्सा / अस्पताल व्यय, परिवार में 2 शादियाँ, बुरी कंपनी से बचें यह आपको नुकसान पहुंचा सकती है, विष योग।",
//         type: 0,
//     },
//     {
//         combo: 82,
//         effect:
//             "व्यक्ति के पास मामूली धन है, अत्यधिक चिकित्सा / अस्पताल व्यय, परिवार में 2 शादियाँ, बुरी कंपनी से बचें यह आपको नुकसान पहुंचा सकती है, विष योग।",
//         type: 0,
//     },
//     {
//         combo: 34,
//         effect:
//             "पैर कांपना, परिवार में किसी को लकवा, व्यक्ति को श्वसन संबंधित समस्याएँ, अगर जन्म तिथि में 3 या अधिक बार 8 होता है तो इस कॉम्बो को न लें।",
//         type: 0,
//     },
//     {
//         combo: 43,
//         effect:
//             "पैर कांपना, परिवार में किसी को लकवा, व्यक्ति को श्वसन संबंधित समस्याएँ, अगर जन्म तिथि में 3 या अधिक बार 8 होता है तो इस कॉम्बो को न लें।",
//         type: 0,
//     },
//     {
//         combo: 45,
//         effect:
//             "अलग-अलग चिकित्सा कारणों के लिए अस्पताल जाने की जरूरत है और न्यायालय में विभिन्न मुद्दों के लिए, प्रतिबंधित जीवन।",
//         type: 0,
//     },
//     {
//         combo: 54,
//         effect:
//             "अलग-अलग चिकित्सा कारणों के लिए अस्पताल जाने की जरूरत है और न्यायालय में विभिन्न मुद्दों के लिए, प्रतिबंधित जीवन।",
//         type: 0,
//     },
//     {
//         combo: 46,
//         effect: "अतिरिक्त संबंध, अंतर जाति विवाह, मूत्रमार्ग संक्रमण।",
//         type: 0,
//     },
//     {
//         combo: 64,
//         effect: "अतिरिक्त संबंध, अंतर जाति विवाह, मूत्रमार्ग संक्रमण।",
//         type: 0,
//     },
//     {
//         combo: 48,
//         effect:
//             "(बहुत नकारात्मक) रक्त संबंधित बीमारी, अइलाज न किया जा सकने वाली समस्याएँ, सेक्सुअल आनंद में कमी।",
//         type: 0,
//     },
//     {
//         combo: 84,
//         effect:
//             "(बहुत नकारात्मक) रक्त संबंधित बीमारी, अइलाज न किया जा सकने वाली समस्याएँ, सेक्सुअल आनंद में कमी।",
//         type: 0,
//     },
//     {
//         combo: 67,
//         effect:
//             "प्रेम विवाह की संभावना, पति के स्वास्थ्य में समस्या, उलझन में विवाहित जीवन की संभावना।",
//         type: 0,
//     },
//     {
//         combo: 76,
//         effect:
//             "प्रेम विवाह की संभावना, पति के स्वास्थ्य में समस्या, उलझन में विवाहित जीवन की संभावना।",
//         type: 0,
//     },
//     {
//         combo: 68,
//         effect:
//             "आंख समस्या, शरीर के किसी एक अंग में समस्या... यदि जन्म तिथि में एक से अधिक 1 हो तो इस कॉम्बो को सिफारिश न करें।",
//         type: 0,
//     },
//     {
//         combo: 86,
//         effect:
//             "आंख समस्या, शरीर के किसी एक अंग में समस्या... यदि जन्म तिथि में एक से अधिक 1 हो तो इस कॉम्बो को सिफारिश न करें।",
//         type: 0,
//     },
//     {
//         combo: 89,
//         effect:
//             "तर्कसंगत, सिद्धांतों के साथ काम, व्यक्ति को बाद में जीवन में पुरानी समस्या हो सकती है।",
//         type: 0,
//     },
//     {
//         combo: 98,
//         effect:
//             "तर्कसंगत, सिद्धांतों के साथ काम, व्यक्ति को बाद में जीवन में पुरानी समस्या हो सकती है।",
//         type: 0,
//     },
// ];

// Excel sheet data

// const englishArr = [
//     {
//         combo: 11,
//         effect: "Emotional, Ego, Attitude, communication and speaking fast",
//         type: 1,
//     },
//     {
//         combo: 22,
//         effect:
//             "Mood swing, Depression, to much Emotional, BP problem, If name starting with B,K, R than 100% Emotional issue",
//         type: 0,
//     },
//     {
//         combo: 33,
//         effect: "Hungary for Knowledge, Less Grounded",
//         type: 2,
//     },
//     {
//         combo: 44,
//         effect: "Delay, Struggle, Headache",
//         type: 0,
//     },
//     {
//         combo: 55,
//         effect: "Lazy, lethargic, communication and money can increase",
//         type: 1,
//     },
//     {
//         combo: 66,
//         effect:
//             "Luxury lover, Travelling, At time not allowed to use at need",
//         type: 1,
//     },
//     {
//         combo: 77,
//         effect:
//             "Mood swings, Internal Disturbances, Spirituality, Over Thinking, Anxiety",
//         type: 0,
//     },
//     {
//         combo: 88,
//         effect: "Delay, Disturbance, Obstacles",
//         type: 0,
//     },
//     {
//         combo: 99,
//         effect:
//             "Debt, Anger, Blood related issues, skin colour red tone, children can have this combo",
//         type: 0,
//     },

//     // upper to be checked

//     {
//         combo: 12,
//         effect: "Attractive face, saving person, Helpful life partner",
//         type: 1,
//     },
//     {
//         combo: "13",
//         effect:
//             "Good Advisor, Good Education, Respectful and Popular, Special in his circle, 31 combination makes person Professional",
//         type: 1,
//     },
//     {
//         combo: 31,
//         effect:
//             "Good Advisor, Good Education, Respectful and Popular, Special in his circle, 31 combination makes person Professional",
//         type: 1,
//     },
//     {
//         combo: 15,
//         effect:
//             "Father's popularity, Generally these people make their father famous (good cause)",
//         type: 1,
//     },
//     {
//         combo: 51,
//         effect:
//             "Father's popularity, Generally these people make their father famous (good cause)",
//         type: 1,
//     },
//     {
//         combo: 25,
//         effect:
//             "Hath me Shaffa, Can work in occult science/Medical line, One who gives Bail to others, Success through Air-Travel, Try to avoid stuff related to Finance.",
//         type: 1,
//     },
//     {
//         combo: 52,
//         effect:
//             "Hath me Shaffa, Can work in occult science/Medical line, One who gives Bail to others, Success through Air-Travel, Try to avoid stuff related to Finance.",
//         type: 1,
//     },
//     {
//         combo: 29,
//         effect:
//             "Person have decent amount of Money, Live happily on the money of Someone else, Native might become egoistic, If DOB 29 Relationship issues, Success through Air-Travel, Try to avoid stuff related to Finance.",
//         type: 1,
//     },
//     {
//         combo: 92,
//         effect:
//             "Person have decent amount of Money, Live happily on the money of Someone else, Native might become egoistic, If DOB 29 Relationship issues, Success through Air-Travel, Try to avoid stuff related to Finance.",
//         type: 1,
//     },
//     {
//         combo: 73,
//         effect:
//             "Complete personality, person would be able to take benefit from knowledge.",
//         type: 1,
//     },
//     {
//         combo: 37,
//         effect:
//             "Complete personality, person would be able to take benefit from knowledge.",
//         type: 1,
//     },
//     {
//         combo: 38,
//         effect:
//             "Real Estate, Counsellor, Peacemaker or mediator between Two parties.",
//         type: 1,
//     },
//     {
//         combo: 83,
//         effect:
//             "Real Estate, Counsellor, Peacemaker or mediator between Two parties.",
//         type: 1,
//     },
//     {
//         combo: 47,
//         effect:
//             "Honest, Brilliant, gives importance of Integrity, Rahu-Ketu Combo.",
//         type: 1,
//     },
//     {
//         combo: 74,
//         effect:
//             "Honest, Brilliant, gives importance of Integrity, Rahu-Ketu Combo.",
//         type: 1,
//     },
//     {
//         combo: 57,
//         effect:
//             "Speaker, writer, Public relation, Good Expressive person, Lot of person comes to them for Advice.",
//         type: 1,
//     },
//     {
//         combo: 75,
//         effect:
//             "Speaker, writer, Public relation, Good Expressive person, Lot of person comes to them for Advice.",
//         type: 1,
//     },
//     {
//         combo: 69,
//         effect:
//             "Good management skill, Good Planner, Opposite Sex involvement.",
//         type: 1,
//     },
//     {
//         combo: 96,
//         effect:
//             "Good management skill, Good Planner, Opposite Sex involvement.",
//         type: 1,
//     },
//     {
//         combo: 78,
//         effect: "Healer, Idealistic, Solve any problem by own power.",
//         type: 1,
//     },
//     {
//         combo: 87,
//         effect: "Healer, Idealistic, Solve any problem by own power.",
//         type: 1,
//     },

//     // neutral

//     {
//         combo: 17,
//         effect:
//             "Money related work is never stopped, There is someone in close circle who is in Govt. job, Person might be working in MNC and getting good facilities ex private- Good facilities/Work from Home, Chances of 2 Marriage , More profit from Lying, If DOB has many 7, than don't chose this combo, If 2,5,6 missing in DOB and Mobile has 17/71 will give majorrelationship issues",
//         type: 2,
//     },
//     {
//         combo: 71,
//         effect:
//             "Money related work is never stopped, There is someone in close circle who is in Govt. job, Person might be working in MNC and getting good facilities ex private- Good facilities/Work from Home, Chances of 2 Marriage , More profit from Lying, If DOB has many 7, than don't chose this combo, If 2,5,6 missing in DOB and Mobile has 17/71 will give majorrelationship issues",
//         type: 2,
//     },
//     {
//         combo: 19,
//         effect:
//             "You own what u want, Always on a high place, Professional person, Rasukhdar, dom Lover",
//         type: 1,
//     },
//     {
//         combo: 91,
//         effect:
//             "You own what u want, Always on a high place, Professional person, Rasukhdar, dom Lover",
//         type: 1,
//     },
//     {
//         combo: 21,
//         effect: "Attractive face, waste of Money",
//         type: 2,
//     },
//     {
//         combo: 24,
//         effect:
//             "Keep patience to achieve something, Makes different plans and brain actively processing those plans, negative/destructive thinking.",
//         type: 2,
//     },
//     {
//         combo: 42,
//         effect:
//             "Keep patience to achieve something, Makes different plans and brain actively processing those plans, negative/destructive thinking.",
//         type: 2,
//     },
//     {
//         combo: 35,
//         effect:
//             "Native gets success away from Home, Fear of Father, Hence Successful, Good Economical Condition, Liquid money problem.",
//         type: 2,
//     },
//     {
//         combo: 53,
//         effect:
//             "Native gets success away from Home, Fear of Father, Hence Successful, Good Economical Condition, Liquid money problem.",
//         type: 2,
//     },
//     {
//         combo: 63,
//         effect:
//             "More of Principal oriented person, Barrier in Studies , Good knowledge but native will struggle in presentation.",
//         type: 2,
//     },
//     {
//         combo: 36,
//         effect:
//             "More of Principal oriented person, Barrier in Studies , Good knowledge but native will struggle in presentation.",
//         type: 2,
//     },

//     {
//         combo: 93,
//         effect:
//             "Loves to show-off, Person will have a lots of Duality in nature.",
//         type: 2,
//     },
//     {
//         combo: 39,
//         effect:
//             "Loves to show-off, Person will have a lots of Duality in nature.",
//         type: 2,
//     },
//     {
//         combo: 49,
//         effect: "Do risky work , Uniform work, Criminal minded.",
//         type: 2,
//     },
//     {
//         combo: 94,
//         effect: "Do risky work , Uniform work, Criminal minded.",
//         type: 2,
//     },
//     {
//         combo: 56,
//         effect:
//             "Hesitate to ask own money, Apke ghar ke pass koi big landmark he kya Mandir/Superstore, Business minded",
//         type: 2,
//     },
//     {
//         combo: 65,
//         effect:
//             "Hesitate to ask own money, Apke ghar ke pass koi big landmark he kya Mandir/Superstore, Business minded",
//         type: 2,
//     },
//     {
//         combo: 85,
//         effect:
//             "Money stuck , Calculated mind, Person doing some work related to Money/Finance, Talks about Lakhs and Crores",
//         type: 2,
//     },
//     {
//         combo: 58,
//         effect:
//             "Money stuck , Calculated mind, Person doing some work related to Money/Finance, Talks about Lakhs and Crores",
//         type: 2,
//     },
//     {
//         combo: 95,
//         effect:
//             "Destroy relationship through Bad speech , Person opt for Science or commerce stream",
//         type: 2,
//     },
//     {
//         combo: 59,
//         effect:
//             "Destroy relationship through Bad speech , Person opt for Science or commerce stream",
//         type: 2,
//     },
//     {
//         combo: 79,
//         effect: "Success after separation from Father.",
//         type: 2,
//     },
//     {
//         combo: 97,
//         effect: "Success after separation from Father.",
//         type: 2,
//     },
//     {
//         combo: 14,
//         effect:
//             "Person can get attracted to Loan liabilities, Legal Notice, Health issues, Hard work, Toughness Number.",
//         type: 0,
//     },
//     {
//         combo: 41,
//         effect:
//             "Person can get attracted to Loan liabilities, Legal Notice, Health issues, Hard work, Toughness Number.",
//         type: 0,
//     },
//     {
//         combo: 16,
//         effect:
//             "(Most Negative) Spouse health issues, married life issues, income confined (Owners have less income at the time of having this mo. No.).",
//         type: 0,
//     },
//     {
//         combo: 61,
//         effect:
//             "(Most Negative) Spouse health issues, married life issues, income confined (Owners have less income at the time of having this mo. No.).",
//         type: 0,
//     },
//     {
//         combo: 18,
//         effect:
//             "(Very Negative) Spouse health issue, understanding issues in father & son, Govt. related issue, change in job frequently.",
//         type: 0,
//     },
//     {
//         combo: 81,
//         effect:
//             "(Very Negative) Spouse health issue, understanding issues in father & son, Govt. related issue, change in job frequently.",
//         type: 0,
//     },
//     {
//         combo: 23,
//         effect:
//             "Generally many enemy but none of them will be able to harm he native.",
//         type: 0,
//     },
//     {
//         combo: 32,
//         effect:
//             "Generally many enemy but none of them will be able to harm he native.",
//         type: 0,
//     },
//     {
//         combo: 26,
//         effect:
//             "Barrier in Studies or Break in education , Girl- Problem with mother in law, Attraction towards money or opposite sex, Chances of less Sperm count or Diabetes.",
//         type: 0,
//     },
//     {
//         combo: 62,
//         effect:
//             "Barrier in Studies or Break in education , Girl- Problem with mother in law, Attraction towards money or opposite sex, Chances of less Sperm count or Diabetes.",
//         type: 0,
//     },
//     {
//         combo: 27,
//         effect:
//             "Good intuition, Joint pain Or Urine related disease, Arthritis (Vaat Issue).",
//         type: 0,
//     },
//     {
//         combo: 72,
//         effect:
//             "Good intuition, Joint pain Or Urine related disease, Arthritis (Vaat Issue).",
//         type: 0,
//     },
//     {
//         combo: 28,
//         effect:
//             "Person have decent amount of Money, Excessive Medical/Hospital Expenditure, 2 marriages in the Family, Try to avoid Bad company it can Harm you, Vish yog.",
//         type: 0,
//     },
//     {
//         combo: 82,
//         effect:
//             "Person have decent amount of Money, Excessive Medical/Hospital Expenditure, 2 marriages in the Family, Try to avoid Bad company it can Harm you, Vish yog.",
//         type: 0,
//     },
//     {
//         combo: 34,
//         effect:
//             "Legs shivering, Paralysis to someone in the family, Breathing related issues to person, if DOB has 3 or more times 8 than don't take this combo.",
//         type: 0,
//     },
//     {
//         combo: 43,
//         effect:
//             "Legs shivering, Paralysis to someone in the family, Breathing related issues to person, if DOB has 3 or more times 8 than don't take this combo.",
//         type: 0,
//     },
//     {
//         combo: 45,
//         effect:
//             "Needs to visit Hospital visits for different medical reasons and Court for different issues, Life with Restrictions.",
//         type: 0,
//     },
//     {
//         combo: 54,
//         effect:
//             "Needs to visit Hospital visits for different medical reasons and Court for different issues, Life with Restrictions.",
//         type: 0,
//     },
//     {
//         combo: 46,
//         effect: "Extra relationship, Inter-cast marriage, UT infection.",
//         type: 0,
//     },
//     {
//         combo: 64,
//         effect: "Extra relationship, Inter-cast marriage, UT infection.",
//         type: 0,
//     },
//     {
//         combo: 48,
//         effect:
//             "(Very Negative) Blood related disease, Incurable problems, Deficiency in sexual pleasure.",
//         type: 0,
//     },
//     {
//         combo: 84,
//         effect:
//             "(Very Negative) Blood related disease, Incurable problems, Deficiency in sexual pleasure.",
//         type: 0,
//     },
//     {
//         combo: 67,
//         effect:
//             "Chances of Love marriage, Issue in Spouse health, Chances of disturbed married life.",
//         type: 0,
//     },
//     {
//         combo: 76,
//         effect:
//             "Chances of Love marriage, Issue in Spouse health, Chances of disturbed married life.",
//         type: 0,
//     },
//     {
//         combo: 68,
//         effect:
//             "Eye Problem, Issue in any one organ of Body… If multiple 1 in DOB than don’t recommend this combo.",
//         type: 0,
//     },
//     {
//         combo: 86,
//         effect:
//             "Eye Problem, Issue in any one organ of Body… If multiple 1 in DOB than don’t recommend this combo.",
//         type: 0,
//     },
//     {
//         combo: 89,
//         effect:
//             "Argumentative, Works with Principle, Person might get chronic issue in later part of life.",
//         type: 0,
//     },
//     {
//         combo: 98,
//         effect:
//             "Argumentative, Works with Principle, Person might get chronic issue in later part of life.",
//         type: 0,
//     },
// ];
