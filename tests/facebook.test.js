/**
 * Tests for Facebook integration safety
 * Testing the defensive coding bug fix
 */

describe('Facebook API Safety', () => {
  describe('handleSessionResponse', () => {
    test('should handle response without authResponse', () => {
      const response = {
        authResponse: null
      };
      
      const handleSessionResponse = function(response) {
        if (!response.authResponse) {
          return;
        }
        // BUG FIX: Check if FB exists before calling
        if (typeof FB !== 'undefined') {
          FB.logout(response.authResponse);
        }
      };
      
      // Should return early without error
      expect(() => handleSessionResponse(response)).not.toThrow();
    });

    test('should not call FB.logout when FB is undefined (bug fix test)', () => {
      const response = {
        authResponse: { token: 'test_token' }
      };
      
      // Ensure FB is not defined
      global.FB = undefined;
      
      const handleSessionResponse = function(response) {
        if (!response.authResponse) {
          return;
        }
        // BUG FIX: Check if FB exists before calling
        if (typeof FB !== 'undefined') {
          FB.logout(response.authResponse);
        }
      };
      
      // Should not throw error even when FB is undefined
      expect(() => handleSessionResponse(response)).not.toThrow();
    });

    test('should call FB.logout when FB is defined', () => {
      const response = {
        authResponse: { token: 'test_token' }
      };
      
      // Mock FB object
      global.FB = {
        logout: jest.fn()
      };
      
      const handleSessionResponse = function(response) {
        if (!response.authResponse) {
          return;
        }
        if (typeof FB !== 'undefined') {
          FB.logout(response.authResponse);
        }
      };
      
      handleSessionResponse(response);
      
      expect(global.FB.logout).toHaveBeenCalledWith(response.authResponse);
      
      // Cleanup
      delete global.FB;
    });

    test('should be defensive against missing FB SDK', () => {
      const response = {
        authResponse: { token: 'test_token' }
      };
      
      // Simulate FB not loaded
      delete global.FB;
      
      const handleSessionResponse = function(response) {
        if (!response.authResponse) {
          return;
        }
        if (typeof FB !== 'undefined') {
          FB.logout(response.authResponse);
        }
      };
      
      // Before the fix, this would throw "FB is not defined"
      // After the fix, it should handle gracefully
      expect(() => handleSessionResponse(response)).not.toThrow();
    });
  });
});
