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
                <div class="task">Participation in code reviews for other developers to ensure code quality, adherence to coding standards, and identifying areas for improvement.</div>
              </div>
            </Transition>
            <Transition>
              <div v-if="active === 1" class="position-info">
                <div class="position-duration">November 2019 - May 2022</div>
                <div class="task">Leading an R&D team, which enabled us to experiment with many technologies, such as: browser extensions, native java applications, electron js, C, and many more.</div>
                <div class="task">Maintaining experimental solutions, keeping in touch with clients and working with many teams from Europe.</div>
              </div>
            </Transition>
            <Transition>
              <div v-if="active === 2" class="position-info">
                <div class="position-duration">November 2018 - November 2019</div>
                <div class="task">Development of a payment gateway - the core product of the company.</div>
                <div class="task">Creating many internal tools in Ruby on Rails, such as showcase app for clients, markdown CMS for documentation and more.</div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // Basic date operation for primary experience
  const diff = new Date().getTime() - new Date(2018, 10, 1).getTime();
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor((diff - years * (1000 * 60 * 60 * 24 * 365.35)) / (1000 * 60 * 60 * 24 * 30));

  const active = ref(0);

  const showTab = (index: number) => {
    active.value = index;
    document.querySelectorAll('#experience ul li').forEach((li, i) => {
      i === index ? li.classList.add('active') : li.classList.remove('active');
    });
  };
</script>

<style lang="scss" scoped>
  .my-experience {
    .header {
      margin-bottom: 160px;

      @media screen and (max-width: $medium) {
        margin-bottom: 64px;
      }
    }

    @media screen and (max-width: $small) {
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
            @include condensed-text;
            color: $white;
            font-size: 22px;
            margin-bottom: 8px;

            a {
              font-weight: bold;
              color: $primary;
            }
          }
        }

        .positions {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          @media screen and (max-width: $medium) {
            flex-direction: column;
            // 1px due to column border - only visual thing
            width: calc(100% - 1px);
          }

          ul {
            background-color: $dark;
            // 1px due to column border - only visual thing
            width: calc(25% - 1px);

            @media screen and (max-width: $medium) {
              margin-left: 0;
              margin-right: 0;
              width: 100%;
              display: flex;
              flex-direction: row;
              border-top: solid 1px #222;
              border-bottom: solid 1px #222;
            }

            li {
              width: 100%;
              list-style: none;
              padding: 16px 8px;
              color: $light-2;
              border-left: solid 2px $light-2;
              transition: all linear 0.1s;

              @media screen and (max-width: $medium) {
                padding: 8px 4px;
                font-size: 16px;
                width: 33.333%;
              }

              &.active, &:hover {
                color: $primary;
              }

              &:hover {
                cursor: pointer;
                border-left: solid 2px $primary;
              }

              &.active {
                border-left: solid 4px $primary;
                background: $primary-transparent-04;
              }
            }
          }

          .position-container {
            width: 50%;
            @media screen and (max-width: $medium) {
              width: 100%;
              margin-top: 32px;
            }
            .position-info {
              position: absolute;
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              @media screen and (max-width: $lg-with-offset) {
                width: 50%;
              }

              @media screen and (max-width: $medium) {
                max-width: unset;
                width: 100%;
              }

              .position-duration {
                @include condensed-text;

                color: $light;
                margin-bottom: 16px;
                font-size: 16px;
              }

              .task {
                color: $light-2;
                font-size: 16px;
                margin-bottom: 16px;
                font-weight: 400;

                &::before {
                  content: '// ';
                  color: $primary;
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
