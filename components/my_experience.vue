<template>
  <div id="experience" class="my-experience container">
    <Header title="My Experience" anchor="experience" />
    <div class="content">
      <div class="company">
        <div class="company-header">
          <div class="title">
            Team Leader, Ruby on Rails Developer <a href="https://espago.com" target="_blank">@ Espago</a>
          </div>
          <div class="duration">
            November 2018 - Now ({{ `${years} years, ${months} months` }})
          </div>
        </div>

        <div class="positions">
          <ul>
            <li class="active" @click="showTab(0)">Team Leader, Developer</li>
            <li @click="showTab(1)">Regular Developer</li>
            <li @click="showTab(2)">Junior RoR Developer</li>
          </ul>

          <div class="position-container">
            <Transition>
              <div v-if="active === 0" class="position-info">
                <div class="position-duration">May 2022 - Now</div>
                <div class="task">Team management, managing few small interdisciplinary teams. Agile agile agile.</div>
                <div class="task">Product planning and development - as lead developer and project manager. Keeping relations with key clients and partners.</div>
                <div class="task">Onboarding new employees, organizing personal training sessions and leading new developers. </div>
                <div class="task">Participation in code reviews for other developers to ensure code quality, adherence to coding standards, and identify areas for improvement.</div>
              </div>
            </Transition>
            <Transition>
              <div v-if="active === 1" class="position-info">
                <div class="position-duration">November 2019 - May 2022</div>
                <div class="task">Creating new product - integration of POS terminal and e-commerce transactions. Taking lead of R&D team, which created possibility of experiments with many technologies, such as: browser extensions, native java applications, electron js, C, and many more.</div>
                <div class="task">Maintenance of experimental solutions, keeping in touch with clients and working with many teams from Europe.</div>
              </div>
            </Transition>
            <Transition>
              <div v-if="active === 2" class="position-info">
                <div class="position-duration">November 2018 - November 2019</div>
                <div class="task">Development of payment system gateway - core product of company.</div>
                <div class="task">Creating many internal tools for company in Ruby on Rails, such as showcase app for clients, markdown CMS for documentation and more.</div>
              </div>
          </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const diff = new Date().getTime() - new Date(2018, 10, 1).getTime();
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diff - years * (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

  const active = ref(0);

  const showTab = (index: number) => {
    active.value = index;
    document.querySelectorAll('#experience ul li').forEach((li, i) => {
      if (i === index) { li.classList.add('active'); }
      else { li.classList.remove('active'); }
    });
  }
</script>

<style lang="scss">
  .my-experience {
    .header {
      margin-bottom: 160px;
    }

    @media screen and (max-width: 540px) {
      margin-bottom: 256px;
    }

    .v-enter-active, .v-leave-active {
      opacity: 1;
      transition: all 0.5s ease;
    }
    .v-enter-from, .v-leave-to { opacity: 0; }
    .v-enter-from { margin-top: -25px; }
    .v-leave-to { margin-top: 100px; }


    .content {
      .company {
        .company-header {
          margin-bottom: 32px;

          .title {
            color: var(--white);
            font-size: 22px;
            margin-bottom: 8px;
            letter-spacing: var(--condensed);

            a {
              font-weight: bold;
              color: var(--primary);
            }
          }
        }

        .positions {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          @media screen and (max-width: 720px) {
            flex-direction: column;
            width: calc(100% - 1px);
            border-top: solid 1px #222;
            border-bottom: solid 1px #222;
          }

          ul {
            // margin-left: 48px;
            // margin-right: 24px;
            background-color: var(--bg-color);
            width: 25%;

            @media screen and (max-width: 720px) {
              margin-left: 0;
              margin-right: 0;
              width: 100%;
              display: flex;
              flex-direction: row;
            }

            li {
              width: 100%;
              list-style: none;
              padding: 16px 8px;
              color: var(--light-2);
              border-left: solid 2px var(--light-2);
              transition: all linear 0.1s;

              @media screen and (max-width: 720px) {
                padding: 8px 4px;
                font-size: 16px;
                width: 33.333%;
              }

              &.active, &:hover {
                color: var(--primary);
              }

              &:hover {
                cursor: pointer;
                border-left: solid 2px var(--primary);
              }

              &.active {
                border-left: solid 4px var(--primary);
                background: var(--primary-transparent);
              }
            }
          }

          .position-container {
            width: 50%;
            @media screen and (max-width: 720px) {
              width: 100%;
            }
            .position-info {
              position: absolute;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              max-width: 540px;

              @media screen and (max-width: 1272px) {
                margin-top: 24px;
                width: calc(50% - 96px);
              }

              @media screen and (max-width: 720px) {
                margin-top: 24px;
                width: calc(100% - 64px);
              }

              .position-duration {
                color: var(--light);
                margin-bottom: 16px;
                font-size: 16px;
                letter-spacing: var(--condensed);
              }

              .task {
                color: var(--light-2);
                font-size: 16px;
                // padding-right: 16px;
                margin-bottom: 16px;
                font-weight: 400;

                &::before {
                  content: '// ';
                  color: var(--primary);
                  font-weight: 600;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
