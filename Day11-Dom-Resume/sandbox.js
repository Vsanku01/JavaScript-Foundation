// Defining all the divs
// resume
const resume = document.createElement('div')
resume.classList.add('resume')
// resume-header
const resumeHeader = document.createElement('div')
resumeHeader.classList.add('resume-header')
// resume-info
const resumeInfo = document.createElement('div')
resumeInfo.classList.add('resume-info')
// resume-split
const resumeSplit = document.createElement('div')
resumeSplit.classList.add('resume-split')

// Final - Tree Structure Code
document.body.append(resume)
resume.append(resumeHeader)
resume.append(resumeInfo)
resume.append(resumeSplit)

// **** Resume Header **********

// 1.  profile-image
const profileImage = document.createElement('div')
profileImage.classList.add('profile-image')

const img = document.createElement('img')
img.setAttribute('src', './assets/profile.png')
img.setAttribute('alt', 'profile-image')
img.setAttribute('id','profile-image')

// 2.profile Name
const profileNameDiv = document.createElement('div')
profileNameDiv.classList.add('profile-name-div')

const profileDiv = document.createElement('div')
profileDiv.classList.add('profile-div')

const name = document.createElement('h1')
name.innerText = 'Vishnu Darshan'

const profileBanner = document.createElement('div')


profileBanner.classList.add('profile-banner')




// resume-header Tree
resumeHeader.append(profileImage)
resumeHeader.append(profileNameDiv)
resumeHeader.append(profileBanner)


// 1. Profile Image
profileImage.append(img)

// 2. Profile Name
profileNameDiv.append(profileDiv)
profileDiv.append(name)


// ***** Resume Header End ********



// ***** Resume Info Start  ******


const para = document.createElement('p')
para.innerText = 'Mail : svdr2000@gmail.com | Github: Vsanku01 | Linkedin: Vishnu Darshan Sanku'

// Resume Info Tree
resumeInfo.append(para)

const resumeHr = document.createElement('hr')
resumeInfo.append(resumeHr)

//  ***** Resume Info End ******



// ********* Resume Split Start ********

//  1. Resume left
const resumeLeft = document.createElement('div')
resumeLeft.classList.add('resume-left')

resumeSplit.append(resumeLeft)


// Profile Icon
const profile = document.createElement('div')
profile.classList.add('profile')

resumeLeft.append(profile)

const profileIcon = document.createElement('div')
profileIcon.classList.add('profile-icon')

profile.append(profileIcon)

const faUser = document.createElement('i')
faUser.classList.add(`fa-user`)




profileIcon.append(faUser)

const profileTitle = document.createElement('h2')
profileTitle.innerText = 'Profile'

profile.append(profileTitle)

// Profile Text
const profileText = document.createElement('div')
profileText.classList.add('profile-text')

resumeLeft.append(profileText)


const profileDesc = document.createElement('p')
profileDesc.innerText = 'Extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to come up with interesting ideas.'

profileText.append(profileDesc)

// SKILL CARD 
const profile2 = document.createElement('div')
profile2.classList.add('profile')

resumeLeft.append(profile2)

const profileIcon2 = document.createElement('div')
profileIcon2.classList.add('profile-icon')

profile2.append(profileIcon2)

const faUser2 = document.createElement('i')
faUser2.classList.add('fa-flask')
faUser2.setAttribute('aria-hidden', 'true')

profileIcon2.append(faUser2)


const profileDesc2 = document.createElement('h2')
profileDesc2.innerText = 'Skills'

profile2.append(profileDesc2)



const technicalSkills = document.createElement('h2')
technicalSkills.innerText = 'Technical Skills'

resumeLeft.append(technicalSkills)

// SKILLS SECTION


const skillsInfo = document.createElement('div')
skillsInfo.classList.add('skills-info')

resumeLeft.append(skillsInfo)

const skills = document.createElement('section')
skills.classList.add('skills')

skillsInfo.append(skills)

const mySkills = document.createElement('div')
mySkills.classList.add('myskills')

skills.append(mySkills)

const skillItem = document.createElement('div')
skillItem.classList.add('skillitem')

mySkills.append(skillItem)

const programming = document.createElement('div')
programming.classList.add('programming')

skillItem.append(programming)

const ul = document.createElement('ul')

programming.append(ul)

// HTML
const html = document.createElement('h3')
html.innerText = 'HTML'
const spanBar = document.createElement('span')
spanBar.classList.add('bar')
const spanHTML = document.createElement('span')
spanHTML.classList.add('html')

ul.append(html)
spanBar.append(spanHTML)
ul.append(spanBar)


// CSS
const css = document.createElement('h3')
css.innerText = 'CSS'
const spanBarCSS = document.createElement('span')
spanBarCSS.classList.add('bar')
const spanCSS = document.createElement('span')
spanCSS.classList.add('css')

ul.append(css)
spanBarCSS.append(spanCSS)
ul.append(spanBarCSS)


// JavaScript
const javaScript = document.createElement('h3')
javaScript.innerText = 'JavaScript'
const spanBarJS = document.createElement('span')
spanBarJS.classList.add('bar')
const spanJavascript = document.createElement('span')
spanJavascript.classList.add('js')

ul.append(javaScript)
spanBarJS.append(spanJavascript)
ul.append(spanBarJS)

// Flutter
const flutter = document.createElement('h3')
flutter.innerText = 'Flutter'
const spanBarFlutter = document.createElement('span')
spanBarFlutter.classList.add('bar')
const spanFlutter = document.createElement('span')
spanFlutter.classList.add('html')

ul.append(flutter)
spanBarFlutter.append(spanFlutter)
ul.append(spanBarFlutter)


// SQL
const sql = document.createElement('h3')
sql.innerText = 'SQL'
const spanBarSQL = document.createElement('span')
spanBarSQL.classList.add('bar')
const spanSQL= document.createElement('span')
spanSQL.classList.add('sql')


const programming2 = document.createElement('div')
programming2.classList.add('programming')

skillItem.append(programming2)

const ul2 = document.createElement('ul')

programming2.append(ul2)

ul2.append(sql)
spanBarSQL.append(spanSQL)
ul2.append(spanBarSQL)

// Python
const python = document.createElement('h3')
python.innerText = 'Python'
const spanBarPython = document.createElement('span')
spanBarPython.classList.add('bar')
const spanPython= document.createElement('span')
spanPython.classList.add('java')

ul2.append(python)
spanBarPython.append(spanPython)
ul2.append(spanBarPython)

// Bootstrap
const bootstrap = document.createElement('h3')
bootstrap.innerText = 'Bootstrap'
const spanBarBootstrap = document.createElement('span')
spanBarBootstrap.classList.add('bar')
const spanBootstrap = document.createElement('span')
spanBootstrap.classList.add('bootstrap')

ul2.append(bootstrap)
spanBarBootstrap.append(spanBootstrap)
ul2.append(spanBarBootstrap)

// Node JS
const nodeJS = document.createElement('h3')
nodeJS.innerText = 'Node JS'
const spanBarNodeJS = document.createElement('span')
spanBarNodeJS.classList.add('bar')
const spanNodejs = document.createElement('span')
spanNodejs.classList.add('nodejs')

ul2.append(nodeJS)
spanBarNodeJS.append(spanNodejs)
ul2.append(spanBarNodeJS)



// Work Experience
const workProfile = document.createElement('div')
workProfile.classList.add('profile')

resumeLeft.append(workProfile)

const workProfileIcon = document.createElement('div')
workProfileIcon.classList.add('profile-icon')

workProfile.append(workProfileIcon)

const workProfileClass = document.createElement('i')
workProfileClass.classList.add('fa-briefcase')

workProfileIcon.append(workProfileClass)

const workExperience = document.createElement('h2')
workExperience.innerText = 'Work Experience'

workProfile.append(workExperience)

// Software Developer Intern

const softwareDeveloper = document.createElement('h3')
softwareDeveloper.innerText = 'Software Developer Intern - PACT Software Services - ( Dec 2019 - Mar 2020 )'

resumeLeft.append(softwareDeveloper)


const softwareDesc = document.createElement('div')
softwareDesc.classList.add('profile-text')

resumeLeft.append(softwareDesc)

const softwareDescPTag = document.createElement('p')
softwareDescPTag.innerText = 'Design and develop a Mobile Application that communicates with company ERP and generates production costs, quality standards, and completion dates.'

softwareDesc.append(softwareDescPTag);

const scsvmvCseLab = document.createElement('h3')
scsvmvCseLab.innerText = 'SCSVMV Cse Lab, Flutter Developer ( Oct 2019 - Nov 2019)'

resumeLeft.append(scsvmvCseLab)

const libraryDiv = document.createElement('div')
libraryDiv.classList.add('profile-text')

resumeLeft.append(libraryDiv);

const libraryDesc = document.createElement('p')
libraryDesc.innerText = 'Designed and developed online digital library for CSE Department'

libraryDiv.append(libraryDesc)

// *** hr **
const splitHr = document.createElement('hr')
resumeSplit.append(splitHr)


// ********* Resume Split Left End ********
const resumeRight = document.createElement('div')
resumeRight.classList.add('resume-right')

resumeSplit.append(resumeRight)


// 2. Resume right
const rrProfile = document.createElement('div')
rrProfile.classList.add('profile')

resumeRight.append(rrProfile)



const rrProfileIcon = document.createElement('div')
rrProfileIcon.classList.add('profile-icon')

rrProfile.append(rrProfileIcon)

const rrbriefCase = document.createElement('i')
rrbriefCase.classList.add('fa-briefcase')

rrProfileIcon.append(rrbriefCase)

const rrPublications = document.createElement('h2')
rrPublications.innerText = 'Publications'

rrProfile.append(rrPublications)

const rrPublicationName = document.createElement('h4')
rrPublicationName.innerText = 'Automated Diagnosis and Cataloguing of Foliar Diseases in Apple Trees using Ensemble of Deep Neural Networks'

resumeRight.append(rrPublicationName)

const rrDiv = document.createElement('div')
rrDiv.classList.add('profile-text')

resumeRight.append(rrDiv)

const rrPublicationDesc = document.createElement('p')
rrPublicationDesc.innerText = 'Prior detection and identification of diseases in trees help to eradicate the misuse of chemical fertilizers and improved production. This paper proposes the usage of Deep Ensembled Neural Networks and automation of foliar disease identification in Apple trees by a single picture of the Apple tree leaves.'

rrDiv.append(rrPublicationDesc)

// Education
const rrEducationProfile = document.createElement('div')
rrEducationProfile.classList.add('profile')

resumeRight.append(rrEducationProfile)

const rrEducationProfileIcon = document.createElement('div')
rrEducationProfileIcon.classList.add('profile-icon')

rrEducationProfile.append(rrEducationProfileIcon)


const rrEducationProfileIconTag = document.createElement('i')
rrEducationProfileIconTag.classList.add('fa-graduation-cap')

rrEducationProfileIcon.append(rrEducationProfileIconTag)

const rrEducationProfileName = document.createElement('h2')
rrEducationProfileName.innerText = 'Education'

rrEducationProfile.append(rrEducationProfileName)


const rrEducationProfileNoNameDiv = document.createElement('div')

resumeRight.append(rrEducationProfileNoNameDiv)

const rrEducationProfileUniversity = document.createElement('h3')
rrEducationProfileUniversity.innerText = 'SCSVMV University'

rrEducationProfileNoNameDiv.append(rrEducationProfileUniversity)

const rrEducationProfileBtech = document.createElement('h4')
rrEducationProfileBtech.innerText = 'Btech- Computer Science Engineering (2017 - 2021)'

rrEducationProfileNoNameDiv.append(rrEducationProfileBtech)

// Programming Projects
const rrProgrammingProfile = document.createElement('div')
rrProgrammingProfile.classList.add('profile')

resumeRight.append(rrProgrammingProfile)

const rrProgrammingProfileIcon = document.createElement('div')
rrProgrammingProfileIcon.classList.add('profile-icon')

rrProgrammingProfile.append(rrProgrammingProfileIcon)

const rrProgrammingProfileIconTag = document.createElement('i')
rrProgrammingProfileIconTag.classList.add('fa-briefcase')

rrProgrammingProfileIcon.append(rrProgrammingProfileIconTag)

const rrProgrammingProfileName = document.createElement('h2')
rrProgrammingProfileName.innerText = 'Programming'

rrProgrammingProfile.append(rrProgrammingProfileName)


const rrProgrammingProfileProjects = document.createElement('div')
rrProgrammingProfileProjects.classList.add('programming-projects')

resumeRight.append(rrProgrammingProfileProjects)

// Library
const rrLibray = document.createElement('h4')
rrLibray.innerText = '1. Digital Library Mobile App'

rrProgrammingProfileProjects.append(rrLibray)

const libDiv = document.createElement('div')
libDiv.classList.add('profile-text')

rrProgrammingProfileProjects.append(libDiv)

const rrLibrayDesc = document.createElement('p')
rrLibrayDesc.innerText = 'A Digital Library Application developed using Flutter and firebase cloudfirestore where students can log in and find the needful e-books and handwritten notes of Faculty.'

libDiv.append(rrLibrayDesc)

// House Prices Predictor
const rrHousePrices = document.createElement('h4')
rrHousePrices.innerText = '2. House Prices Predictor'

rrProgrammingProfileProjects.append(rrHousePrices)

const houseDiv = document.createElement('div')
houseDiv.classList.add('profile-text')

rrProgrammingProfileProjects.append(houseDiv)

const rrHousePricesDesc = document.createElement('p')
rrHousePricesDesc.innerText = 'Built a test-driven Machine Learning model to predict House Prices. Performed Data Wrangling operations and created a model with good accuracy. Later the model was optimized  by hyperparameter tuning and Xg boost.'

houseDiv.append(rrHousePricesDesc)


// 3. CTS Club - Android App
const rrCTS = document.createElement('h4')
rrCTS.innerText = '3. CTS Club - Android App'

rrProgrammingProfileProjects.append(rrCTS)

const ctsDIV = document.createElement('div')
ctsDIV.classList.add('profile-text')

rrProgrammingProfileProjects.append(ctsDIV)


const rrCTSDesc = document.createElement('p')
rrCTSDesc.innerText = 'Android App for maganing and posting CTS Club events of SCSVMV university.'

ctsDIV.append(rrCTSDesc)

// Tourism App
const rrTourism = document.createElement('h4')
rrTourism.innerText = '4. Tourism App'

rrProgrammingProfileProjects.append(rrTourism)

const tourismDiv = document.createElement('div')
tourismDiv.classList.add('profile-text')

rrProgrammingProfileProjects.append(tourismDiv)

const rrTourismDesc = document.createElement('p')
rrTourismDesc.innerText = 'An IOS App which gets the users current location and suggests various hotspots near to his/her location in addition users can find the specialty of hotspots and can go through the story and can navigate to particular hotspots. Used Google Maps API, Distance Matrix API.'

tourismDiv.append(rrTourismDesc)











































// Styles

// resume
// resume.style.backgroundColor = "#565656"
// resume.style.width = '100%'
// resume.style.height = '250px'
// resume.style.textAlign = 'center'


// profile-image
// profileImage.style.borderRadius = '50%'
// profileImage.style.height = '200px'
// profileImage.style.border = '5px dotted #fabe28'
// profileImage.style.objectFit = 'contain'
// profileImage.style.marginTop = '15px'
// profileImage.style.textAlign = 'center'