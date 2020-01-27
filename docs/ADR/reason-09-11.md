# Storybook Business Decision

- Status: Accepted
- Deciders: Pietro and Eimi
- Date: 2019-08 (Sometime)

## Context and Problem Statement

We want to easily be able to:

1. demonstrate components
2. refactor and group related components
3. easily test new UX ideas in components

### Problem 1: Demonstrate components

Currently we have to clone and run local servers to demonstrate the components in DPE. This is not an easy solution for individuals who would like to quickly see the catalogue of tested and usable components in DPE.

### Problem 2: Refactor and group related components

Overly complicated components are difficult to test. We need to break them down and isolate the components so that it is easier to understand and extend. We can also easily define the interface of the components. This will help people contribute and maintain DPE.

Additionally this [post](https://www.conductor.com/nightlight/how-to-use-react-storybook/) explains anti-pattern scenarios that we want to avoid:

> Here's a typical situation: you're going through the specs of a new page that you have to develop. All the components look familiar and you've seen them used elsewhere. You plan your tasks based on an understanding that some components have already been implemented. After agreeing on the timing and starting a new sprint, you dig around in the code a bit and are horrified to realize that the existing components are not appropriate for reuse. Now you have three options, none of which are great:
>
> 1. Copy and paste the existing component, and tweak the copy until it suits your needs. But that creates tech debt and a nasty “code smell”. In fact, Kent Beck and Martin Fowler call it their number one code smell in Refactoring: Improving the Design of Existing Code
> 2. Modify/improve/extend the existing component. But experience suggests that this can be expensive, and can become more expensive with each modification/improvement/extension.
> 3. Develop a new, multifunctional component. This is an ok option but it can take a lot of time.

In the organisation, there's been cases where when we wanted to re-use an internal tool's components, it was simply not possible because it wasn't isolated into a component and surfaced or catalogued anywhere. Cataloguing is an important step for a UX heavy project: all our findings should be discoverable.

As this project is Open Source, it will help others and, because of the symbiotic nature of OSS, will help us in return.

### Problem 3: Easily test new UX ideas in components

We currently cannot implement new UX ideas in components and keep a history (unless we have a separate branch, which is not transparent) of different implementations. Having a catalogue of different implementations helps to showcase and test UX of certain components with people easily.

## Decision Drivers

Easy to reason around.

## Considered Options

[Alternative options for catalogues frameworks](https://blog.logrocket.com/alternatives-to-react-storybook/)

## Decision Outcome

We are going to use Storybook for the reasons stated above.

### Positive Consequences

This Storybook will positively effect ease of demonstration, discoverability, documentation, and testability of the project and in the future.

### Negative consequences

Will require some development work.

### Additional Links

[Why and how - Site point](https://www.sitepoint.com/react-storybook-develop-beautiful-user-interfaces-with-ease/)
