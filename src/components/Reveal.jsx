import { useInView } from '../hooks/useInView';

export default function Reveal({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  ...rest
}) {
  const [ref, inView] = useInView();
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? 'reveal--in' : ''} ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
