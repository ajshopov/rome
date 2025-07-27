import './style.css'
import trevi from '/cristina-gottardi-I1Lv2yX67GI-unsplash.jpg'

document.querySelector('#app').innerHTML = `
  <div id="fullpage">
    <div class="section">
      <img src="${trevi}"class="section-bg" alt="">
    </div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
  </div>
`

