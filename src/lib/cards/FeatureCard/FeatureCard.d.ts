import { CardProps } from '../Card';
export interface FeatureCardProps extends CardProps {
    imageSrc?: string;
    imageAltText?: string;
    variant?: 'titleProminent' | 'imageProminent';
}
export declare function FeatureCard({ className, style, classes: classesProp, imageSrc, imageAltText, variant, children, title, subtitle, emphasisText, thumbnailImage, headerActions, ...rest }: FeatureCardProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default FeatureCard;
