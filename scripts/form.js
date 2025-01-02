const propertyType = document.getElementById('property-type');
  const selectService = document.getElementById('select-service');

  propertyType.addEventListener('change', function () {
    if (this.value === 'commercial') {
      selectService.disabled = true;
    } else if (this.value === 'residential') {
      selectService.disabled = false;
    }
  });