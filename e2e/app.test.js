describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('View products')).tap();
  });

  it('should render the start products', async () => {
    await expect(element(by.text('Nike Mercurial Vapor 15 Elite'))).toBeVisible();
  });

  it('should render the popular products', async () => {
    await element(by.text('Popular')).tap();
    await expect(element(by.text('NikePremier 3'))).toBeVisible();
  });

  it('should render the drop price products', async () => {
    await element(by.text('Drop price')).tap();
    await expect(element(by.text('Corinthians Home Shirt'))).toBeVisible();
  });

  it('should render products filtered by the SearchBar', async () => {
    await element(by.id('searchBar')).typeText('Nike Mercurial Superfly');
    await expect(element(by.text('Nike Football Boots light weight'))).toBeVisible();
  });

  it('should load more products when user goes to the bottom', async () => {
    await element(by.id('flatList')).scroll(300, 'down', NaN, 0.5);
    await expect(element(by.text('MLS 24 Competition Ball'))).toBeVisible();
  });
});
