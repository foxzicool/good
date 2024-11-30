import type { ExtractPropTypes } from 'vue';
import type ThButton from './ThButton.vue';
import type ThCard from './ThCard.vue';
import type ThIcon from './ThIcon.vue';
import type ThTypography from './ThTypography.vue';
import type ThImage from './ThImage.vue';
import type ThLink from './ThLink.vue';
import type ThMenu from './ThMenu.vue';

export type ThButtonProps = ExtractPropTypes<typeof ThButton.props>;
export type ThCardProps = ExtractPropTypes<typeof ThCard.props>;
export type ThIconProps = ExtractPropTypes<typeof ThIcon.props>;
export type ThTypographyProps = ExtractPropTypes<typeof ThTypography.props>;
export type ThImageProps = ExtractPropTypes<typeof ThImage.props>;
export type ThLinkProps = ExtractPropTypes<typeof ThLink.props>;
export type ThMenuProps = ExtractPropTypes<typeof ThMenu.props>;
