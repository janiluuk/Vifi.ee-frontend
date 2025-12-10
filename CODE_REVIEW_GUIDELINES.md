# Code Review Guidelines

This document establishes the code review process and standards for the Vifi.ee frontend project.

## Purpose

Code reviews help ensure:
- **Code Quality**: Maintain high standards and catch bugs early
- **Knowledge Sharing**: Team members learn from each other
- **Consistency**: Code follows established patterns and conventions
- **Security**: Identify potential security vulnerabilities

## Review Process

### 1. Before Submitting a Pull Request

**Developer Checklist:**
- [ ] Code follows the project's coding standards
- [ ] All tests pass (`npm test`)
- [ ] Linting passes without errors (`npm run lint`)
- [ ] Code is self-documenting or includes necessary comments
- [ ] No console.log statements or debug code remains
- [ ] Dependencies are up-to-date and secure
- [ ] Changes are minimal and focused on the issue
- [ ] Documentation is updated if needed

### 2. Creating a Pull Request

**PR Requirements:**
- **Title**: Clear, descriptive title (e.g., "Fix: Variable scoping in utils.js")
- **Description**: 
  - What changed and why
  - Link to related issue(s)
  - Testing instructions
  - Screenshots (for UI changes)
- **Size**: Keep PRs small and focused (ideally < 400 lines)
- **Labels**: Add appropriate labels (bug, feature, documentation, etc.)

### 3. Review Guidelines

**Reviewers Should Check:**

#### Code Quality
- [ ] Code is readable and maintainable
- [ ] Functions are small and do one thing well
- [ ] Variable and function names are descriptive
- [ ] No code duplication (DRY principle)
- [ ] Error handling is appropriate
- [ ] No obvious performance issues

#### JavaScript Best Practices
- [ ] No implicit global variables
- [ ] Proper variable scoping (var, let, const)
- [ ] No eval() or new Function()
- [ ] Use === instead of == (unless intentional)
- [ ] guard-for-in loops properly check hasOwnProperty
- [ ] No console.log in production code

#### Security
- [ ] No hardcoded credentials or API keys
- [ ] Input validation is present where needed
- [ ] XSS vulnerabilities are prevented
- [ ] Dependencies are secure and up-to-date
- [ ] No eval() or unsafe code execution

#### Testing
- [ ] Tests cover new functionality
- [ ] Tests are meaningful and not just for coverage
- [ ] Edge cases are tested
- [ ] Tests are maintainable

#### Backbone.js Specific
- [ ] Models properly validate data
- [ ] Views handle cleanup in remove()
- [ ] Events are properly bound and unbound
- [ ] No memory leaks from event listeners

### 4. Providing Feedback

**Good Practices:**
- Be respectful and constructive
- Explain the "why" behind suggestions
- Distinguish between required changes and suggestions
- Acknowledge good code and solutions
- Use "I" statements ("I think", "I suggest")
- Link to documentation or examples

**Comment Types:**
- **Required**: Must be fixed before merge (security, bugs)
- **Suggestion**: Nice to have, but not blocking
- **Question**: Seeking clarification
- **Praise**: Acknowledging good work

**Example Comments:**
- ✅ "This could create a global variable. Consider adding 'var' here."
- ✅ "Great defensive coding! This prevents the crash if FB isn't loaded."
- ❌ "This is wrong." (Not constructive)

### 5. Responding to Feedback

**Author Should:**
- Address all comments (fix, explain, or discuss)
- Mark resolved conversations as resolved
- Ask for clarification if feedback is unclear
- Update the PR description if scope changes
- Re-request review after significant changes

### 6. Approval and Merge

**Approval Criteria:**
- All required changes are addressed
- At least one approval from a team member
- All CI checks pass (tests, linting, build)
- No unresolved conversations

**Merge Process:**
1. Ensure branch is up-to-date with main
2. Use "Squash and Merge" for feature branches
3. Delete the branch after merging
4. Monitor for any post-merge issues

## Code Standards

### JavaScript Style Guide

#### Variable Declarations
```javascript
// Good - proper scoping
var seconds = Math.floor(x % 60);
var minutes = Math.floor(x % 60);

// Bad - implicit globals
seconds = Math.floor(x % 60);
minutes = Math.floor(x % 60);
```

#### Equality Comparisons
```javascript
// Good - strict equality
if (value === 'test') { }

// Avoid - loose equality (unless intentional)
if (value == 'test') { }
```

#### Property Iteration
```javascript
// Good - safe iteration
for (var key in object) {
  if (object.hasOwnProperty(key)) {
    // process key
  }
}

// Bad - unsafe iteration
for (key in object) {
  // process key
}
```

#### Defensive Coding
```javascript
// Good - check before using
if (typeof FB !== 'undefined') {
  FB.logout();
}

// Bad - assumes FB exists
FB.logout();
```

#### Console Statements
```javascript
// Development only
if (typeof console !== 'undefined' && console.log) {
  console.log('Debug info');
}

// Better - remove before production
// console.log('Debug info');
```

### Backbone.js Patterns

#### View Cleanup
```javascript
// Always clean up events
remove: function() {
  this.stopListening();
  this.undelegateEvents();
  Backbone.View.prototype.remove.call(this);
}
```

#### Model Validation
```javascript
// Validate before saving
validate: function(attrs) {
  if (!attrs.name) {
    return 'Name is required';
  }
}
```

## Tools

### Automated Checks

**Linting:**
```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

**Testing:**
```bash
npm test            # Run all tests
npm run test:watch  # Watch mode
npm run test:coverage # Coverage report
```

**Building:**
```bash
npm run build       # Production build
npm run build:dev   # Development build
npm run watch       # Watch mode
```

### Recommended IDE Extensions

- ESLint integration
- EditorConfig support
- Git integration
- Markdown preview

## Common Issues to Watch For

### Variable Scoping
- Implicit global variables (no var/let/const)
- Variable shadowing
- Loop variable leaking

### Performance
- N+1 query problems in collections
- Inefficient DOM manipulation
- Memory leaks from event listeners
- Redundant API calls

### Security
- XSS vulnerabilities
- CSRF protection
- Outdated dependencies
- Exposed API keys

### Maintainability
- Magic numbers without explanation
- Complex functions (> 50 lines)
- Nested callbacks (callback hell)
- Duplicate code

## Escalation

If there's disagreement on a review:
1. Discuss in PR comments
2. If unresolved, schedule a meeting
3. Lead developer makes final decision
4. Document decision for future reference

## Resources

- [ESLint Rules](https://eslint.org/docs/rules/)
- [Backbone.js Documentation](https://backbonejs.org/)
- [JavaScript Best Practices](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Git Best Practices](https://git-scm.com/book/en/v2)

## Review Metrics

Track these metrics to improve the process:
- Average time to first review
- Average time to merge
- Number of review iterations
- Post-merge issues found

---

**Remember**: Code review is about improving code quality and sharing knowledge, not criticizing the developer. Be kind, be constructive, and focus on the code, not the person.
