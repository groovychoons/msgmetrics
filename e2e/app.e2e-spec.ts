import { MsgmetricsPage } from './app.po';

describe('msgmetrics App', () => {
  let page: MsgmetricsPage;

  beforeEach(() => {
    page = new MsgmetricsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
