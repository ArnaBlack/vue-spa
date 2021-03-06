export default {
  state: {
    ads: [
      {
        title: 'First add',
        description: 'Hello',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: 1
      },
      {
        title: 'second add',
        description: 'Hello',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: 2
      },
      {
        title: 'third add',
        description: 'Hello',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: 3
      }
    ]
  },
  mutations: {
    createAd(state, payload) {
        state.ads.push(payload);
    }
  },
  actions: {
    createAd({commit}, payload) {
      payload.id = Math.random();
      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },

    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      });
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id == adId)
      }
    }
  }
}