import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header>
      <h1>im.bingo</h1>
    </header>

    <main class="main clearfix">
      <h2>你好，欢迎来到 im.bingo。感谢访问我的网站。</h2>

      <div class="row">
        <div class="column-6">
          <div class="media">
            <img class="media-image" src="shoes.png">
            <div class="media-body">
              <h4>关于我</h4>
              <p>
                我是刘俊。本网站还在建设中。
              </p>
            </div>
          </div>
        </div>

        <div class="column-6">
          <div class="media">
            <img class="media-image" src="runner.png">
            <div class="media-body">
              <h4>GitHub</h4>
              <p>
                你可以访问我的 <a href="https://github.com/JunBingo">GitHub 主页</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column-6">
          <div class="media">
            <img class="media-image" src="runner.png">
            <div class="media-body">
              <h4>Three.js - JavaScript 3D</h4>
              <p>
                你也可以访问 <a href="https://three.bingo">three.bingo</a> 了解我的 <a href="https://threejs.org">Three.js</a> Demo
              </p>
            </div>
          </div>
        </div>

        <div class="column-6">
          <div class="media">
            <img class="media-image" src="shoes.png">
            <div class="media-body">
              <h4>联系我</h4>
              <p>
                我的邮箱📮：JunBingo#outlook.com
              </p>
            </div>
          </div>
        </div>
      </div>

    </main>
  </div>

`;
