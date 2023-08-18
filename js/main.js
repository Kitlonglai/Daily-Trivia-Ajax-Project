document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start');
  const category = document.getElementById('category');
  const difficulty = [
    document.getElementById('easy'),
    document.getElementById('medium'),
    document.getElementById('hard')
  ];

  startButton.addEventListener('click', startQuiz);

  function startQuiz() {
    try {
      const categoryId = category.value;
      const chosenDifficulty = getCurrentDifficulty();

      const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${chosenDifficulty}&type=multiple`;

      fetchData(url)
        .then(data => {
        })
        .catch(error => {
          alert(error);
        });
    } catch (error) {
      alert(error);
    }
  }

  async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response failed');
    }
    return response.json();
  }

  function getCurrentDifficulty() {
    const checkedDifficulty = difficulty.find(element => element.checked);

    if (checkedDifficulty) {
      return checkedDifficulty.id;
    } else {
      throw new Error('Please select a difficulty!');
    }
  }
});
