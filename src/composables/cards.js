import set1 from '../assets/set1-en_us.json';
import set2 from '../assets/set2-en_us-fixed.json';
import set3 from '../assets/set3-en_us.json';
import { reactive, computed } from 'vue';

// state
const state = reactive({
  cardsData: [...set1, ...set2, ...set3].sort((a, b) =>
    a.cost > b.cost ? 1 : -1
  )
});

// getters
const getCardsData = computed(() => state.cardsData);

const getRandomCode = computed(() => {
  const filteredCards = state.cardsData.filter(
    card => card.type === 'Unit'
  );
  return filteredCards[Math.floor(Math.random() * filteredCards.length)]
    .cardCode;
});



// mutations

export { getRandomCode, getCardsData };
