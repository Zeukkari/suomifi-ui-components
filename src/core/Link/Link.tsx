import React, { Component } from 'react';
import { default as styled } from 'styled-components';
import { AsPropType } from '../../utils/typescript';
import { withDefaultTheme } from '../theme/utils';
import { ThemeComponent } from '../theme';
import {
  Link as CompLink,
  LinkProps as CompLinkProps,
} from '../../components/Link/Link';
import { LinkExternal, LinkExternalProps } from './LinkExternal';
import { baseStyles } from './Link.baseStyles';
export { LinkExternal, LinkExternalProps };

type LinkVariant = 'default' | 'external';
export interface LinkProps extends CompLinkProps, ThemeComponent {
  variant?: LinkVariant;
  asProp?: AsPropType;
}

const StyledLink = styled(({ theme, ...passProps }: LinkProps) => (
  <CompLink {...passProps} />
))`
  ${props => baseStyles(props)};
`;

/**
 * <i class="semantics" />
 * Used for adding a link
 */
export class Link extends Component<LinkProps | LinkExternalProps> {
  static external = (props: LinkExternalProps) => <LinkExternal {...props} />;

  render() {
    const { variant, ...passProps } = withDefaultTheme(this.props);

    if (variant === 'external')
      return <LinkExternal {...this.props as LinkExternalProps} />;
    return <StyledLink {...passProps} />;
  }
}
