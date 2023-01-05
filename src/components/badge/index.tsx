import { BadgeContainer } from "./styles";

type BadgeProps = {
  label: number;
};

export function Badge({ label, ...rest }: BadgeProps) {
  return (
    <BadgeContainer {...rest}>
      <p>{label}</p>
    </BadgeContainer>
  );
}

export default Badge;
