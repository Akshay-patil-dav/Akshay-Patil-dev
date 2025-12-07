import React from 'react';

const filterOptions = [
  { id: 'all', label: 'All Projects' },
  { id: 'frontend', label: 'Front-end' },
  { id: 'backend', label: 'Back-end' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'ui-design', label: 'UI Design' },
];

const FilterSection = ({ activeFilter, onFilterChange }) => {
  return (
    <div id="filterSection" role="group" aria-label="Filter projects">
      {filterOptions.map((option) => (
        <button
          key={option.id}
          id={`filter-btn-${option.id}`}
          className={`filter-btn ${activeFilter === option.id ? 'filter-btn--active' : ''}`}
          onClick={() => onFilterChange(option.id)}
          aria-pressed={activeFilter === option.id}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default FilterSection;
