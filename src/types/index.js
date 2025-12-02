// Type definitions for the Work Section
// Since this is a JavaScript project, these are just for documentation

/**
 * @typedef {'All' | 'Branding' | 'Web Design' | 'Mobile' | 'Art Direction'} ProjectCategory
 */

/**
 * @typedef {Object} ThemeConfig
 * @property {string} bg - Background color class
 * @property {string} text - Text color class
 * @property {string} accent - Accent/border color class
 */

/**
 * @typedef {Object} Project
 * @property {string} id - Unique project identifier
 * @property {string} title - Project title
 * @property {string} client - Client name
 * @property {string} description - Project description
 * @property {string} year - Project year
 * @property {ProjectCategory} category - Project category
 * @property {string} imageUrl - Project image URL
 * @property {'cyan' | 'rose' | 'gray' | 'lime' | 'purple'} theme - Color theme
 */

export { };
