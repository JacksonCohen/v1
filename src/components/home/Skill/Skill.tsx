import { Description, Divider, Highlight, Icon, Label, Wrapper } from './styles';

interface SkillProps {
  label: string;
  icon: string;
  description: string;
  highlight?: string;
}

interface SkillComponentProps {
  data: SkillProps;
}

const Skill = ({ data: { label, icon, description, highlight } }: SkillComponentProps) => {
  return (
    <Wrapper>
      <Icon>
        <i className={icon} />
      </Icon>
      <Label>{label}</Label>
      <Divider />
      <Description>
        {highlight && <Highlight>{highlight}</Highlight>}
        {description}
      </Description>
    </Wrapper>
  );
};

export default Skill;
