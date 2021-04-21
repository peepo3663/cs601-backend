
export const index = (req, res, next) => {
  let myProjects = [{
    name: 'Inner circle Project (Backend and Android Application)',
    description: 'This project is a native Android Chat Application for course <b>CS673 at Boston University</b>. <br /> I implemented this with a native <b>Android Application framework</b>, and <b>Spring Boot Java</b> as a Backend System. Moreover, It is a chat application so to have real-time messaging. I used <b>Firebase Firestore</b> to achieve this feature.',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/inner-circle%2FScreenshot_1607546781.png?alt=media&token=d2e65e30-0268-4bdd-81f0-696b7aad048a'
  },
    {
      name: 'Tungngern Application (iOS Application)',
      description: 'Building and creating new features for Tungngern Application that relied on Thai\'s Government Campaign. "Shim Shop Shai" (Traveling in Thailand)<br /> It implement on <b>iOS Swift</b>',
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/%E0%B8%96%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%2Fapp-%E0%B8%96%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99.jpg%20copy.jpg?alt=media&token=19304bd7-0dc4-4da6-8aeb-5b3245646b77'
    }, {
      name: 'Krung Thai E-Solution (Angular, Android)',
      description: 'This project is for personal banking in one of the largest bank in Thailand (Krung Thai), It developed with <b>Android Kotlin</b> and JavaScript Bridge to <b>Angular</b> web application.',
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/e-sol%2Fe-signature%20sample.png?alt=media&token=8430d7b0-2b14-4a36-8a8a-fda2ba88240b'
    }, {
      name: 'Krung Thai Biznow (Angular, Android)',
      description: 'This project is for business banking in one of the largest bank in Thailand (Krung Thai), It developed with <b>Android Kotlin</b> and JavaScript Bridge to <b>Angular</b> web application.',
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/e-sol%2Fe-signature%20sample.png?alt=media&token=8430d7b0-2b14-4a36-8a8a-fda2ba88240b'
    }, {
      name: 'Glurr (iOS Application)',
      description: 'Glurr Application is the No.1 platform for Thai university students that everyone can create any topic for freeFeatures:-Feed/Post contents about university and your interests. <br />It is developed with native <b>iOS Swift</b> and <b>PHP</b> as Backend. Here is the <a href="https://download.cnet.com/Glurr/3000-12941_4-76603491.html">download link</a>',
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/glurr%2F230x0w.png?alt=media&token=5dbf88e7-329d-4b6a-ab10-d35b4ad5b601'
    }, {
      name: 'Glurr Talk (Node.js Backend and iOS Application)',
      description: 'Glurr Talk is the #1 online live learning platform. It is developed with <b>iOS Swift</b> and <b>Node JS</b> as a backend system with <b>Firebase firestore</b> for real-time chat messaging',
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/glurr-talk%2F230x0w%20(1).png?alt=media&token=1125b73d-4bec-4c4c-a4a5-00ccfb739b1c'
    }, {
      name: 'Ookbee Application (iOS)',
      description: 'Ookbee Application is eReader application with many of books and magazines in Thailand',
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/ookbee%2F1597793261181%20(1).jpeg?alt=media&token=b449b2f5-31f6-4e1c-b016-f4597932fca2'
    }, {
      name: 'Ookbee Buffet Application (iOS)',
      description: 'OOKBEE Buffet e-book application which you can read unlimited local and international magazine over 10,000 titles in 1 app',
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/ookbee%2F1597793261181%20(1).jpeg?alt=media&token=b449b2f5-31f6-4e1c-b016-f4597932fca2'
    }, {
      name: 'TEEZY (iOS Application)',
      description: 'TEEZY application is the customized t-shirt design and make it real. It is developed with <b>iOS Swift</b> with <b>Shopify</b> sdk.<br /> Here is the <a href="http://www.ninefar.com/?p=20430">article</a> about the application.',
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/tezzy%2F750x750bb.jpeg?alt=media&token=b0b8dc10-2821-4245-bcfe-7925ca1433c9'
    }, {
      name: 'Triam 40 (E-book Android/iOS Application)',
      description: 'Triam 40 is the application for E-book of Triamudom\'s 40th year book. It featured QR code and media player with <b>iOS Swift</b> and <b>native Android</b>',
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/triam40%2Ftriam40-ebook.jpeg?alt=media&token=28ebe066-d09e-44d4-b0fd-471ae134c6f9'
    }]
  res.status(200).json(myProjects)
}
