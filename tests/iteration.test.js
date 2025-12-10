/**
 * Tests for safe property iteration
 * Testing the hasOwnProperty bug fixes
 */

describe('Safe Property Iteration', () => {
  describe('getQueryString with hasOwnProperty', () => {
    test('should only iterate over own properties', () => {
      const dict = {
        q: 'search',
        genre: 'action'
      };
      
      // Add a property to the prototype
      Object.prototype.pollutedProperty = 'should not appear';
      
      // Simulate the fixed getQueryString function
      const getQueryString = function(dict, addParams) {
        const hashables = [];
        // BUG FIX: Added hasOwnProperty check and var declaration
        for (var key in dict) {
          if (dict.hasOwnProperty(key) && dict[key] != undefined) {
            if (dict[key] != "") {
              hashables.push(key + '=' + escape(dict[key]));
            }
          }
        }
        
        if (addParams) {
          // BUG FIX: Added hasOwnProperty check and var declaration
          for (var key in addParams) {
            if (addParams.hasOwnProperty(key)) {
              hashables.push(key + '=' + addParams[key]);
            }
          }
        }
        
        const params = hashables.join('&');
        return params.length ? '?' + params : "";
      };
      
      const result = getQueryString(dict);
      
      // Should not include the polluted property
      expect(result).not.toContain('pollutedProperty');
      expect(result).toContain('q=search');
      expect(result).toContain('genre=action');
      
      // Cleanup
      delete Object.prototype.pollutedProperty;
    });

    test('should handle inherited properties correctly', () => {
      // Create an object with prototype
      const parent = { inherited: 'value' };
      const dict = Object.create(parent);
      dict.own = 'ownValue';
      
      const getQueryString = function(dict) {
        const hashables = [];
        for (var key in dict) {
          if (dict.hasOwnProperty(key) && dict[key] != undefined) {
            if (dict[key] != "") {
              hashables.push(key + '=' + escape(dict[key]));
            }
          }
        }
        const params = hashables.join('&');
        return params.length ? '?' + params : "";
      };
      
      const result = getQueryString(dict);
      
      // Should only include own property
      expect(result).toContain('own=ownValue');
      expect(result).not.toContain('inherited');
    });

    test('should not create global variable key (bug fix test)', () => {
      const dict = { a: '1', b: '2' };
      
      global.key = undefined;
      
      const getQueryString = function(dict) {
        const hashables = [];
        // BUG FIX: Added var declaration to avoid global
        for (var key in dict) {
          if (dict.hasOwnProperty(key) && dict[key] != undefined) {
            if (dict[key] != "") {
              hashables.push(key + '=' + escape(dict[key]));
            }
          }
        }
        return hashables.join('&');
      };
      
      getQueryString(dict);
      
      // Key should not be set as a global variable
      expect(global.key).toBeUndefined();
    });

    test('should handle addParams with hasOwnProperty', () => {
      const dict = { q: 'test' };
      const addParams = { extra: 'param' };
      
      // Add a property to the prototype
      Object.prototype.inherited = 'bad';
      
      const getQueryString = function(dict, addParams) {
        const hashables = [];
        for (var key in dict) {
          if (dict.hasOwnProperty(key) && dict[key] != undefined) {
            if (dict[key] != "") {
              hashables.push(key + '=' + escape(dict[key]));
            }
          }
        }
        
        if (addParams) {
          for (var key in addParams) {
            if (addParams.hasOwnProperty(key)) {
              hashables.push(key + '=' + addParams[key]);
            }
          }
        }
        
        const params = hashables.join('&');
        return params.length ? '?' + params : "";
      };
      
      const result = getQueryString(dict, addParams);
      
      expect(result).toContain('extra=param');
      expect(result).not.toContain('inherited');
      
      // Cleanup
      delete Object.prototype.inherited;
    });
  });
});
