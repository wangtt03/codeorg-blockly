/**
 * @fileoverview Set of types for block connections
 */
'use strict';

goog.provide('Blockly.BlockValueType');

/**
 * Enum of block types. Used for e.g., configuring allowable input connections
 * and occasionally block coloring
 * @enum {string}
 */
Blockly.BlockValueType = {
  NONE: 'None', // Typically as a connection/input check means "accepts any type"
  STRING: 'String',
  NUMBER: 'Number',
  IMAGE: 'Image',
  BOOLEAN: 'Boolean',
  FUNCTION: 'Function',
  COLOUR: 'Colour',
  ARRAY: 'Array',

  // p5.play Sprite
  SPRITE: 'Sprite',

  /**
   * {Object} Behavior
   * {function} Behavior.func
   * {Array} Behavior.extraArgs
   */
  BEHAVIOR: 'Behavior',

  /**
   * {Object} Location
   * {number} Location.x
   * {number} Location.y
   */
  LOCATION: 'Location',
};
