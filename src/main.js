import './style.css'

const images = import.meta.glob('/public/*.{png,jpg,jpeg}', { eager: true, query: '?url', import: 'default' })

const imageUrls = Object.values(images)

document.querySelector('#app').innerHTML = `
  <div id="fullpage">
    ${imageUrls.map((image) => `
      <div class="section">
        <img src="${image}" class="section-bg" alt="">

      </div>
    `).join('')}
  </div>
`

