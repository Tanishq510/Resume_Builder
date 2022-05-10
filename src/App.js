import React from 'react'
import './App.css'
import jsPDF from 'jspdf'
import domtoimage from 'dom-to-image'
import html2canvas from 'html2canvas'

const downloadResume = () => {
  const input = document.getElementById('first-page');
  html2canvas(input)
    .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4',false);
        pdf.addImage(imgData, 'JPEG', 15, 10);
        pdf.save("download.pdf");
    })
}
const App = () => {
  return (
    <div id="my-node">
      <div id="sidebar">
        <div id="outline"></div>
      </div>
      <div id="page-container">
        <button onClick={downloadResume}>Download Resume</button>
        <div id="pf1" className="pf w0 h0" data-page-no={1}>
          <div id="first-page" className="pc pc1 w0 h0">
            <img className="bi x0 y0 w1 h1" alt="" src="bg1.png" />
            <div className="c x0 y1 w2 h2">
              <div
                contentEditable="true"
                className="t m0 x1 h3 y2 ff1 fs0 fc0 sc0 ls0 ws0"
              >
                Tanishq Joshi
              </div>
              <div
                contentEditable="true"
                className="t m0 x1 h4 y3 ff2 fs1 fc1 sc0 ls0 ws0"
              >
                Software Developer
              </div>
            </div>
            <div className="c x2 y1 w3 h2">
              <div
                contentEditable="true"
                className="t m0 x3 h4 y4 ff2 fs1 fc0 sc0 ls0 ws0"
              >
                tanishqjoshi93@gmail.com
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y5 ff2 fs1 fc0 sc0 ls0 ws0"
              >
                tanishq510.github.io
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y6 ff2 fs1 fc0 sc0 ls0 ws0"
              >
                +917869900340
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y7 ff2 fs1 fc0 sc0 ls0 ws0"
              >
                Based in Indore, MP
              </div>
            </div>
            <div className="c x4 y8 w4 h5">
              <div
                contentEditable="true"
                className="t m0 x3 h6 y9 ff3 fs2 fc0 sc0 ls0 ws0"
              >
                Profile Summary
              </div>
            </div>
            <div className="c x0 ya w5 h7">
              <div
                contentEditable="true"
                className="t m0 x3 h4 yb ff2 fs1 fc2 sc0 ls0 ws0"
              >
                Enthusiastic
                <span className="fc3">
                  Software Developer having 3 Years of hands-on experience with
                  web technologies. My constant effort to learn and
                </span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 yc ff2 fs1 fc3 sc0 ls0 ws0"
              >
                implement new technologies has helped to get my hands on
                technologies like React, Angular, Node. My aim is to develop
                systems
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 yd ff2 fs1 fc3 sc0 ls0 ws0"
              >
                that aids organisational goals
              </div>
            </div>
            <div className="c x4 ye w6 h5">
              <div
                contentEditable="true"
                className="t m0 x3 h6 y9 ff3 fs2 fc0 sc0 ls0 ws0"
              >
                Technologies And Languages
              </div>
            </div>
            <div className="c x4 yf w7 h8">
              <div
                contentEditable="true"
                className="t m0 x3 h9 y10 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">React</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y11 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">Redux</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y12 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">Node</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y13 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">Angular 6</span>
              </div>
            </div>
            <div className="c x5 yf w8 h8">
              <div
                contentEditable="true"
                className="t m0 x3 h9 y10 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">JavaScript</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y11 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">TypeScript</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y12 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">jQuery</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y13 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">Express JS</span>
              </div>
            </div>
            <div className="c x6 yf w9 h8">
              <div
                contentEditable="true"
                className="t m0 x3 h9 y10 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">ANT UI</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y11 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">Material UI</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y12 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">jQuery UI</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y13 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">Bootstrap 3/4/5</span>
              </div>
            </div>
            <div className="c x7 yf wa h8">
              <div
                contentEditable="true"
                className="t m0 x3 h9 y10 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">HTML 5</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y11 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">CSS 3</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y12 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">CashFree APIs</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y13 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">Paytm APIs</span>
              </div>
            </div>
            <div className="c x8 yf wb h8">
              <div
                contentEditable="true"
                className="t m0 x3 h9 y10 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">Firebase</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y11 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">Git</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y12 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">GitHub</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y13 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">GitLab</span>
              </div>
            </div>
            <div className="c x9 yf wc h8">
              <div
                contentEditable="true"
                className="t m0 x3 h9 y10 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">TortoiseGit</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y11 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">Swagger</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y12 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">SQL</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h9 y13 ff4 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _0"> </span>
                <span className="ff2">MongoDB</span>
              </div>
            </div>
            <div className="c x4 y14 wd h5">
              <div
                contentEditable="true"
                className="t m0 x3 h6 y9 ff3 fs2 fc0 sc0 ls0 ws0"
              >
                Experience
              </div>
            </div>
            <div className="c x4 y15 we ha">
              <div
                contentEditable="true"
                className="t m0 x3 hb y16 ff3 fs3 fc3 sc0 ls0 ws0"
              >
                Software Developer
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y12 ff2 fs1 fc4 sc0 ls0 ws0"
              >
                CODIANT: A Yash Technologies Company
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y13 ff2 fs1 fc4 sc0 ls0 ws0"
              >
                (January 2021 – Present)
              </div>
            </div>
            <div className="c xa y15 we ha">
              <div
                contentEditable="true"
                className="t m0 x3 h4 y17 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">CMS and API Development</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y18 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">UI conversion and API integration</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y19 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">
                  Problem solving involved in the application
                </span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y1a ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">Project analysis</span>
              </div>
            </div>
            <div className="c x4 y1b we hc">
              <div
                contentEditable="true"
                className="t m0 x3 hb y1c ff3 fs3 fc3 sc0 ls0 ws0"
              >
                Fullstack Developer
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y1d ff2 fs1 fc3 sc0 ls0 ws0"
              >
                WebKodz
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 hd y1e ff2 fs1 fc3 sc0 ls0 ws0"
              >
                (August 2020 – January -2021<span className="fs2">)</span>
              </div>
            </div>
            <div className="c xa y1b we hc">
              <div
                contentEditable="true"
                className="t m0 x3 h4 y1f ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">CMS and API Development</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y20 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">Client handling</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y21 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">
                  Active involvement in different phases of product
                </span>
              </div>
              <div
                contentEditable="true"
                className="t m0 xb h4 y22 ff2 fs1 fc3 sc0 ls0 ws0"
              >
                development
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y23 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">Product Presentation</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y24 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">Team Handling</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y25 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">Database Designing</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y26 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">UI Development </span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y27 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">
                  UI Integration with Frontend Framework
                </span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y28 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">REST API integration</span>
              </div>
            </div>
            <div className="c x4 y29 we ha">
              <div
                contentEditable="true"
                className="t m0 x3 hb y16 ff3 fs3 fc3 sc0 ls0 ws0"
              >
                JR. Fullstack Developer
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y12 ff2 fs1 fc3 sc0 ls0 ws0"
              >
                SMT Groups
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y13 ff2 fs1 fc3 sc0 ls0 ws0"
              >
                (December 2019 – August 2020)
              </div>
            </div>
            <div className="c xa y29 we ha">
              <div
                contentEditable="true"
                className="t m0 x3 h4 y17 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">UI Development</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y18 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">REST API Integration</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y19 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">Building REST API</span>
              </div>
            </div>
            <div className="c x4 y2a we ha">
              <div
                contentEditable="true"
                className="t m0 x3 hb y16 ff3 fs3 fc3 sc0 ls0 ws0"
              >
                Trainee
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y12 ff2 fs1 fc3 sc0 ls0 ws0"
              >
                SMT Groups
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y13 ff2 fs1 fc3 sc0 ls0 ws0"
              >
                (March 2019 – December 2019)
              </div>
            </div>
            <div className="c xa y2a we ha">
              <div
                contentEditable="true"
                className="t m0 x3 h4 y17 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">REST API (intermediate)</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y18 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">UI Development(intermediate)</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y19 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">Testing and Reviewing Applications</span>
              </div>
            </div>
            <div className="c xc y2b wf h5">
              <div
                contentEditable="true"
                className="t m0 x3 h6 y9 ff3 fs2 fc0 sc0 ls0 ws0"
              >
                Education
              </div>
            </div>
            <div className="c xd y2c w10 he">
              <div
                contentEditable="true"
                className="t m0 x3 hf y2d ff3 fs1 fc3 sc0 ls0 ws0"
              >
                Bachelors of Engineering (2015 – 2019)
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h10 y2e ff6 fs1 fc3 sc0 ls0 ws0"
              >
                Shree Vaishnav Institute of Technology and
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h10 y2f ff6 fs1 fc3 sc0 ls0 ws0"
              >
                Science, Indore
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h11 y30 ff2 fs4 fc3 sc0 ls0 ws0"
              >
                CGPA – 7.2 SGPA – 8.1
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 hf y31 ff3 fs1 fc3 sc0 ls0 ws0"
              >
                Senior Secondary
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h10 y32 ff6 fs1 fc3 sc0 ls0 ws0"
              >
                SKTPS, Mandleshwar
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h11 y33 ff2 fs4 fc3 sc0 ls0 ws0"
              >
                CGPA – 8.2
              </div>
            </div>
            <div className="c xe y2b w11 h5">
              <div
                contentEditable="true"
                className="t m0 x3 h6 y9 ff3 fs2 fc0 sc0 ls0 ws0"
              >
                Hobbies
              </div>
            </div>
            <div className="c xf y2c w12 he">
              <div
                contentEditable="true"
                className="t m0 x3 h4 y34 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">Guitar </span>
              </div>
              <div
                contentEditable="true"
                className="t m0 xb h4 y35 ff2 fs1 fc3 sc0 ls0 ws0"
              >
                (https://www.youtube.com/channel/UCLY5SL5FoDmqW8jvPFDmVEg)
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y36 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">Photography</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 xb h4 y37 ff2 fs1 fc3 sc0 ls0 ws0"
              >
                (https://www.instagram.com/being_explorer/)
              </div>
            </div>
            <a className="l" href="mailto:tanishqjoshi93@gmail.com">
              <div
                className="d m1"
                style={{
                  borderStyle: 'none',
                  position: 'absolute',
                  left: '445.500000px',
                  bottom: '813.030029px',
                  width: '121.440002px',
                  height: '13.427979px',
                  backgroundColor: 'rgba(255,255,255,0.000001)',
                }}
              ></div>
            </a>
            <a className="l" href="https://tanishq510.github.io/">
              <div
                className="d m1"
                style={{
                  borderStyle: 'none',
                  position: 'absolute',
                  left: '445.500000px',
                  bottom: '797.588074px',
                  width: '92.447021px',
                  height: '13.427979px',
                  backgroundColor: 'rgba(255,255,255,0.000001)',
                }}
              ></div>
            </a>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
          />
        </div>
        <div id="pf2" className="pf w0 h0" data-page-no={2}>
          <div className="pc pc2 w0 h0">
            <img className="bi x10 y38 w13 h12" alt="" src="bg2.png" />
            <div className="c x10 y39 w14 h13">
              <div
                contentEditable="true"
                className="t m0 x3 hf y3a ff3 fs1 fc0 sc0 ls0 ws0"
              >
                Notable In House Projects
              </div>
            </div>
            <div className="c x3 y3b w15 h14">
              <div
                contentEditable="true"
                className="t m0 x3 h4 y3c ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">
                  React Tic Tac Toe (
                  <span className="fc5">
                    https://tanishq510.github.io/react-tic-tac-toe
                  </span>
                  )
                </span>
              </div>
              <div
                contentEditable="true"
                className="t m0 xb h4 y3d ff2 fs1 fc3 sc0 ls0 ws0"
              >
                Web App Built on JavaScript using ReactJS
              </div>
              <div
                contentEditable="true"
                className="t m0 xb h10 y3e ff6 fs1 fc3 sc0 ls0 ws0"
              >
                (React, GitHub)
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y3f ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">Khaugali</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 xb h4 y40 ff2 fs1 fc3 sc0 ls0 ws0"
              >
                Food delivery application based in Mumbai.
              </div>
              <div
                contentEditable="true"
                className="t m0 xb h10 y41 ff6 fs1 fc3 sc0 ls0 ws0"
              >
                (React , Node, AWS, CashFree, Firebase)
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y42 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">
                  Digital Resume App (
                  <span className="fc5">https://tanishq510.github.io/</span>)
                </span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h15 y43 ff2 fs5 fc3 sc0 ls0 ws0"
              >
                <span className="fs1">
                  Web app built using bootstrap and deployed on GitHub
                </span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y44 ff2 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="ff6"> (Bootstrap 4, GitHub)</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y45 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">Ferivala</span>
              </div>
              <div
                contentEditable="true"
                className="t m0 xb h4 y46 ff2 fs1 fc3 sc0 ls0 ws0"
              >
                Ferivala is a grocery delivery application built on Angular and
                Node
              </div>
              <div
                contentEditable="true"
                className="t m0 xb h10 y47 ff6 fs1 fc3 sc0 ls0 ws0"
              >
                (Angular 6, Node JS, AWS, Firebase, CashFree payment Gateway )
              </div>
              <div
                contentEditable="true"
                className="t m0 x3 h4 y48 ff5 fs1 fc3 sc0 ls0 ws0"
              >
                <span className="_ _1"> </span>
                <span className="ff2">
                  Asharammohanlal (
                  <span className="fc5">https://asharammohanlal.com/</span>)
                </span>
              </div>
              <div
                contentEditable="true"
                className="t m0 xb h4 y49 ff2 fs1 fc3 sc0 ls0 ws0"
              >
                Website built for the client merely for the purpose of online
                presence
              </div>
              <div
                contentEditable="true"
                className="t m0 xb h10 y4a ff6 fs1 fc3 sc0 ls0 ws0"
              >
                (WordPress, AWS)
              </div>
            </div>
            <a
              className="l"
              href="https://tanishq510.github.io/react-tic-tac-toe"
            >
              <div
                className="d m1"
                style={{
                  borderStyle: 'none',
                  position: 'absolute',
                  left: '111.835007px',
                  bottom: '778.431030px',
                  width: '203.805985px',
                  height: '14.013000px',
                  backgroundColor: 'rgba(255,255,255,0.000001)',
                }}
              ></div>
            </a>
            <a className="l" href="https://tanishq510.github.io/">
              <div
                className="d m1"
                style={{
                  borderStyle: 'none',
                  position: 'absolute',
                  left: '122.028999px',
                  bottom: '667.711060px',
                  width: '131.365990px',
                  height: '14.013000px',
                  backgroundColor: 'rgba(255,255,255,0.000001)',
                }}
              ></div>
            </a>
            <a className="l" href="https://asharammohanlal.com/">
              <div
                className="d m1"
                style={{
                  borderStyle: 'none',
                  position: 'absolute',
                  left: '116.212006px',
                  bottom: '558.054016px',
                  width: '141.178986px',
                  height: '14.013000px',
                  backgroundColor: 'rgba(255,255,255,0.000001)',
                }}
              ></div>
            </a>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
          />
        </div>
      </div>
      <div className="loading-indicator"></div>
    </div>
  )
}

export default App
