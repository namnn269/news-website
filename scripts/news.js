'use strict';

const newsContainerEl = document.getElementById('news-container');
const btnNextPageEl = document.getElementById('btn-next');
const btnPreviousPageEl = document.getElementById('btn-prev');
const pageNumEl = document.getElementById('page-num');
function render(
  searchKey,
  newsContainer,
  btnNextPage,
  btnPreviousPage,
  pageNum
) {
  console.log('in news');
  const currentUser = getCurrentUser('currentUser');
  if (!currentUser) return;
  const currentSettings = getSettings(currentUser.userName) ?? [];

  // set infomation for newsAPI
  const country = 'us';
  const category = currentSettings.category ?? 'General';
  const pageSize = currentSettings.pageSize ?? 5;
  let page = 1;
  const apiKey = '64ff9c6d280246cc83de044900a69a46';

  // render news display
  async function renderNews() {
    try {
      if (page === 1) btnPreviousPage.classList.add('hidden');
      else btnPreviousPage.classList.remove('hidden');

      // use for news or search
      const fetchContent = !searchKey
        ? `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`
        : `https://newsapi.org/v2/everything?q=${searchKey}&from=2022-12-23&to=2022-12-23&sortBy=popularity&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;

      const res = await fetch(fetchContent);
      const data = await res.json();
      if (page * pageSize >= data.totalResults || page * pageSize >= 100) {
        btnNextPage.classList.add('hidden');
      } else btnNextPage.classList.remove('hidden');

      newsContainer.innerHTML = '';
      data.articles?.forEach((ar) => {
        const html = `
        <div class="card flex-row flex-wrap">
            <div class="card mb-3" style="">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src="${ar.urlToImage}"
                    class="card-img"
                    alt="${ar.urlToImage}"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">
                     ${ar.title}
                    </h5>
                    <p class="card-text">
                      ${ar.description}
                    </p>
                    <a
                      href="${ar.url}"
                      class="btn btn-primary"
                      target="_blank"
                      >View</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>`;

        newsContainer.insertAdjacentHTML('beforeend', html);
      });
    } catch (err) {
      console.log(err);
    }
  }

  // next page
  if (!btnNextPage) return;
  btnNextPage.addEventListener('click', function () {
    page++;
    pageNum.textContent = page;
    renderNews();
  });

  // previous page
  if (!btnPreviousPage) return;
  btnPreviousPage.addEventListener('click', function () {
    page--;
    pageNum.textContent = page;
    renderNews();
  });
  renderNews();
}
render('', newsContainerEl, btnNextPageEl, btnPreviousPageEl, pageNumEl);
export { render };
