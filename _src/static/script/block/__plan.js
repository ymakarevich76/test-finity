const planBtns = document.querySelectorAll('.plan__btn');
const planCostsYear = document.querySelectorAll('.plan__cost--year');
const planCostsMonth = document.querySelectorAll('.plan__cost--month');

const renderPlanCost = (index) => {
   if (index === 1) {
      planCostsYear.forEach((el) => {
         el.classList.add('d-none');
      });
      planCostsMonth.forEach((el) => {
         el.classList.remove('d-none');
      });
   } else {
      planCostsMonth.forEach((el) => {
         el.classList.add('d-none');
      });
      planCostsYear.forEach((el) => {
         el.classList.remove('d-none');
      });
   }
};

planBtns.forEach((btn, i, planBtns) => {
   btn.addEventListener('click', (evt) => {
      planBtns.forEach((btn) => {
         btn.classList.remove('plan__btn--active');
      });

      evt.target.classList.add('plan__btn--active');

      renderPlanCost(i);
   });
});
