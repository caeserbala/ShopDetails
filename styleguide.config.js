const clientConfigFactory = require('./tools/webpack/client.config');
const path = require('path');
const reactDocgen = require('react-docgen');

const clientConfig = clientConfigFactory({ mode: 'development' });
const commonDir = path.join(__dirname, 'src/shared/components/common/');
const slicesDir = path.join(__dirname, 'src/shared/components/slices/');
const atomsDir = path.join(__dirname, 'src/shared/components/atoms/');
const moleculesDir = path.join(__dirname, 'src/shared/components/molecules/');
const vehicleDir = path.join(__dirname, 'src/shared/components/vehicle/');

/**
 * getNameFromFilePath
 */
function getNameFromFilePath(filePath) {
  let displayName = null;
  const filename = path.basename(filePath, path.extname(filePath));
  if (filename === 'index') {
    const parts = path.dirname(filePath).split(path.sep);
    displayName = parts[parts.length - 1];
  } else {
    displayName = filename;
  }
  return displayName.charAt(0).toUpperCase().concat(displayName.slice(1)).replace(/-([a-z])/, (_, match) => match.toUpperCase());
}

/**
 * createDisplayNameHandler
 * @param {*} filePath
 */
function createDisplayNameHandler(filePath) {
  return function displayNameHandler(documentation) {
    const displayName = getNameFromFilePath(filePath);
    documentation.set('displayName', displayName);
  };
}

module.exports = {
  webpackConfig: clientConfig,
  title: 'Renault Style',
  assetsDir: path.join(__dirname, 'styleguide/'),
  template: path.join(__dirname, 'tools/styleguide/index.html'),
  handlers: () => reactDocgen.defaultHandlers,
  propsParser: (filePath, source, resolver, handlers) => reactDocgen.parse(source, resolver, handlers.concat(createDisplayNameHandler(filePath))),
  sections: [{
    name: 'Components to sort',
    components: () => [
      path.join(commonDir, 'Curtain/Curtain.js'),
      path.join(commonDir, 'Search/FilterPane/FilterPaneFooter.js'),
      path.join(commonDir, 'TabView/TabView.js'),
      path.join(commonDir, 'TabView/TabViewPanel.js'),
      path.join(commonDir, 'Checkbox/MultipleCheckbox.js'),
      path.join(commonDir, 'Textfield/Textfield.js'),
      path.join(commonDir, 'Textfield/MaterialTextfield.js'),
      path.join(commonDir, 'Textfield/MaterialPassword.js'),
      path.join(commonDir, 'Select/Select.js'),
      path.join(commonDir, 'Select/WrapSelect.js'),
      path.join(commonDir, 'Select/RichSelect.js'),
      path.join(commonDir, 'FormComponent/CheckboxWrap.js'),
      path.join(commonDir, 'FormComponent/RadioGroup.js'),
      path.join(commonDir, 'StoreContact/StoreContact.js'),
      path.join(commonDir, 'StoreContact/FormContactCoordinates/FormContactCoordinates.js'),
      path.join(commonDir, 'StoreContact/FormContactQuery/FormContactQuery.js'),
      path.join(commonDir, 'StoreContact/ContactConfirmation/ContactConfirmation.js'),
      path.join(commonDir, 'Button/Button.js'),
      path.join(commonDir, 'Button/ButtonSquare.js'),
      path.join(commonDir, 'Button/ButtonUpPage.js'),
      path.join(commonDir, 'Button/ButtonMore.js'),
    ],
  },
  {
    name: 'atoms/inputs',
    components: () => [
      path.join(atomsDir, 'inputs/ToggleButton/ToggleButton.js'),
      path.join(atomsDir, 'inputs/ColorPicker/ColorPicker.js'),
      path.join(atomsDir, 'inputs/Slider/Slider.js'),
      path.join(atomsDir, 'inputs/LicensePlateForm/FunnelLicensePlateForm.js'),
    ],
  },
  {
    name: 'atoms/icons',
    components: () => [
      path.join(atomsDir, 'icons/IconItem/IconItem.js'),
      path.join(atomsDir, 'icons/IconsDisplayer/IconsDisplayer.js'),
    ],
  },
  {
    name: 'atoms/patterns',
    components: () => [
      path.join(atomsDir, 'patterns/Modal/Modal.js'),
      path.join(atomsDir, 'patterns/Toggle/Toggle.js'),
      path.join(atomsDir, 'patterns/Pagination/Pagination.js'),
      path.join(atomsDir, 'patterns/Message/Message.js'),
      path.join(atomsDir, 'patterns/BubbleStepper/BubbleStepper.js'),
      path.join(atomsDir, 'patterns/ResponsiveTabs/ResponsiveTabs.js'),
    ],
  },
  {
    name: 'molecules/dealer',
    components: () => [
      path.join(moleculesDir, 'dealer/DealerPreview/DealerPreview.js'),
    ],
  },
  {
    name: 'molecules/vehicle',
    components: () => [
      path.join(moleculesDir, 'vehicle/Item/VehicleItem.js'),
      path.join(moleculesDir, 'vehicle/Item/VehicleItemActions.js'),
      path.join(moleculesDir, 'vehicle/Item/VehicleItemFavoritesActions.js'),
      path.join(moleculesDir, 'vehicle/Warranty/VehicleWarranty.js'),
      path.join(moleculesDir, 'vehicle/Carousels/CardCarousel.js'),
    ],
  },
  {
    name: 'molecules/patterns',
    components: () => [
      path.join(moleculesDir, 'patterns/Reassurance/Reassurance.js'),
    ],
  },
  {
    name: 'molecules/editos',
    components: () => [
      path.join(moleculesDir, 'editos/Component27v0A/Component27v0A.js'),
      path.join(moleculesDir, 'editos/Component1v0/Component1v0.js'),
      path.join(moleculesDir, 'editos/ComponentD1v0/ComponentD1v0.js'),
    ],
  },
  {
    name: 'slices/common',
    components: () => [
      path.join(slicesDir, 'common/MainHeader/MainHeader.js'),
      path.join(slicesDir, 'common/MainHeader/FavoriteLink/FavoriteLink.js'),
      path.join(slicesDir, 'common/MainFooter/MainFooter.js'),
      path.join(slicesDir, 'common/MainFooter/Prefooter/Prefooter.js'),
    ],
  },
  {
    name: 'slices/tradein',
    components: () => [
      path.join(slicesDir, 'tradein/Page/Damage/FunnelDamageCheckbox.js'),
      path.join(slicesDir, 'tradein/Page/Damage/FunnelDamageLeft.js'),
      path.join(slicesDir, 'tradein/Page/Damage/FunnelDamageBack.js'),
      path.join(slicesDir, 'tradein/Page/Damage/FunnelDamageRight.js'),
      path.join(slicesDir, 'tradein/Page/Damage/FunnelDamageFront.js'),
      path.join(slicesDir, 'tradein/Page/Damage/FunnelDamageMobile.js'),

    ],
  },
  {
    name: 'slices/uci',
    components: () => [
      path.join(slicesDir, 'uci/Details/VehicleTitle/VehicleTitle.js'),
      path.join(slicesDir, 'uci/Details/VehicleSummary/VehicleSummary.js'),
      path.join(slicesDir, 'uci/Details/VehicleSummaryMobile/VehicleSummaryMobile.js'),
      path.join(slicesDir, 'uci/Details/VehicleActions/VehicleActions.js'),
      path.join(slicesDir, 'uci/Details/VehicleDetailsSidePanel.js'),
      path.join(slicesDir, 'uci/Details/VehicleEquipments/VehicleEquipments.js'),
      path.join(slicesDir, 'uci/Details/VehicleFeatures/VehicleFeatures.js'),
      path.join(slicesDir, 'uci/Details/VehicleWarranties/VehicleWarranties.js'),
      path.join(slicesDir, 'uci/Details/ViewerMobile/ViewerMobile.js'),
      path.join(slicesDir, 'uci/Details/HorizontalList/HorizontalList.js'),
      path.join(vehicleDir, 'Criterias/CriteriasContainer.js'),
      path.join(vehicleDir, 'Criterias/CriteriasMobile.js'),
      path.join(slicesDir, 'uci/Comparator/Details/ComparatorDetails.js'),
      path.join(slicesDir, 'uci/Comparator/Header/ComparatorHeader.js'),
      path.join(slicesDir, 'uci/Details/ViewerMobile/ViewerMobile.js'),
      path.join(vehicleDir, 'Inventory/Search/ColorItem/ColorItem.js'),
    ],
  },
  {
    name: 'slices/my',
    components: () => [
      path.join(slicesDir, 'common/Connect/Authenticate/Login/Login.js'),
      path.join(slicesDir, 'common/Connect/Authenticate/Signup/Signup.js'),
    ],
  }],
};
