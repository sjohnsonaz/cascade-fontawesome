import Cascade, { Component } from 'cascade';
import * as fontawesome from '@fortawesome/fontawesome';

export interface IIconProps {
    id?: string;
    className?: string;
    prefix?: fontawesome.IconPrefix;
    iconName: fontawesome.IconName;
}

export default class Icon extends Component<IIconProps> {
    render() {
        let {
            id,
            className,
            prefix,
            iconName
        } = this.props;
        return (
            <i
                id={id}
                className={className}
                ref={(node: HTMLElement) => {
                    let icons = fontawesome.icon(prefix ?
                        {
                            prefix: prefix,
                            iconName: iconName
                        } :
                        iconName
                    );
                    if (icons) {
                        let iconsHtml = icons.html;
                        if (iconsHtml && iconsHtml[0]) {
                            node.innerHTML = iconsHtml[0];
                        }
                    }
                }} />
        );
    }
}