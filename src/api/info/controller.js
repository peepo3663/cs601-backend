import { success, notFound } from '../../services/response/'
var dayjs = require('dayjs')

const myBD = dayjs('1991-09-22')

export const index = (req, res) => {
  let currentDay = dayjs()
  let response = {
    title: "Wasupol Tungsakultong",
    subtitle: "Mobile Developer & Back End Developer & Front End Developer with 6 years of experience.",
    description: "",
    facebookLink: "https://www.facebook.com/PiPo.Wasupol",
    linkedin: "https://www.linkedin.com/in/wasupol-tungsakultong-5b6b51a8",
    instagram: "https://www.instagram.com/peepo3663",
    github: "https://github.com/peepo3663",
    age: currentDay.diff(myBD, 'year'),
    address: "262 Harvard St Apt 11, Cambridge, MA 02139",
    email: "peepo157@gmail.com",
    phone: "+1 857 919 1438",
    motto: "The only things that keep me motivated are <b class=\"font-blue\">technology</b>, <b class=\"font-red\">my wife</b>, and <b class=\"font-yellow\">my beloved dad.</b>",
    dogImages: [
      "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2F20200826_090417.jpg?alt=media&token=afe2cf50-551d-41ec-b0f7-b542203f1f9e",
      "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_20191014_120714.jpg?alt=media&token=f51063ed-facf-4a90-9a69-36983b58a8a1",
      "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2F20200618_162029.jpg?alt=media&token=2ee16eef-3f0a-496a-a881-3095c2faa408",
      "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_0081.JPG?alt=media&token=e92d933b-65d2-4105-ac31-ab0f173bd3f1",
      "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_0086.JPG?alt=media&token=f21919c6-5c70-4d7c-9598-27cf6119db7d",
      "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_0091.JPG?alt=media&token=8d65ae94-592d-40e2-8a28-3b5b99f9edab",
      "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_0084.JPG?alt=media&token=44fcce22-10a7-48f4-9454-454634554fd7",
      "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2F20200801_173222.jpg?alt=media&token=2db5182c-34c1-4391-9ff6-992567c36046",
      "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_20190520_151844.jpg?alt=media&token=3dbe780f-daee-4a4a-a116-8760fd11a542",
      "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_20190718_160041.jpg?alt=media&token=cd84f62f-4bc2-4d6b-b6e3-545bf2f99803",
      "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_20190716_101425.jpg?alt=media&token=0782ea5f-8da5-44cc-b5e3-228ad5c63ce0",
      "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_20190716_114315.jpg?alt=media&token=1be8d4d9-48e3-454d-9e42-f238a5ec87cf",
      "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2F2019_0715_21501400.jpg?alt=media&token=77355043-ead2-4619-a67a-fcae0d7230ff"
    ]
  }
  res.status(200).json(response)
}

export const show = (req, res) => {

}

