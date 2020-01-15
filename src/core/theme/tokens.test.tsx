import React from 'react';
import { render } from 'react-testing-library';
import { axeTest } from '../../utils/test/axe';

import { defaultTokens } from './';
import { Expander } from '../../';

const { colors } = defaultTokens;
const customColors = {
  ...colors,
  highlightBase: 'hsl(1, 2%, 3%)',
};

const Test = (
  <Expander.group
    OpenAll={'Open all'}
    CloseAll={'Close all'}
    tokens={{ colors: customColors }}
  >
    <Expander title="Test expander 1">Test expander content 1</Expander>
    <Expander title="Test expander 2">Test expander content 2</Expander>
    <Expander title="Test expander 3">Test expander content 3</Expander>
  </Expander.group>
);

test('snapshot testing', () => {
  const TestRendered = render(Test);
  const { container } = TestRendered;
  expect(container.firstChild).toMatchSnapshot();
});

test('should not have basic accessibility issues', axeTest(Test));
