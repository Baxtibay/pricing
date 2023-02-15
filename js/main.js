const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment_period"]')
const elsPricingPlanValue = document.querySelectorAll('.pricing-plan-value')

elsPaymentPeriodRadio.forEach(function (elPaymentRadio) {
  elPaymentRadio.addEventListener('change', () => {
    const period = elPaymentRadio.value

    if(period === 'annual') {
      elsPricingPlanValue.forEach(elPrice => {
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentAnnual
      })
    } else {
      elsPricingPlanValue.forEach(elPrice => {
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentMonthly
      })
    }
  })
})