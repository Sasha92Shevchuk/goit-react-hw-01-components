import PropTypes from 'prop-types';
import { Stat } from './Stat/Stat';
import { Section, StatList, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <StatList>
        {stats.map(stat => (
          <Stat key={stat.id} stat={stat} />
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
