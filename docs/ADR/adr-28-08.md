# Relationship between Storybook and DPE Client

- Status: accepted
- Deciders: Alli and Eimi
- Date: 2019-08-28

Technical Story: N/A

## Context and Problem Statement

We needed to clarify the relationship between the DPE Client repository, where the components we are using to populate the Storybook repo have already been written, and the Storybook repository.

- From which repo would components be published?
- Which repos would consume components from NPM?
- Should the Storybook live inside the Client repo?

## Decision Drivers

N/A

## Considered Options

1. Publish components to NPM from the DPE Client repo, and then consume those components in the Storybook repo
2. Publish components to NPM from the Storybook repo, and then consume those components in the DPE client
3. Include the Storybook config and setup within the Client repo

## Decision Outcome

Chosen option: Option 2, because this allows us to refactor components' code and preview changes within the Storybook locally — before publishing the component to the hosted Storybook and NPM.

This means that our workflow for populating the Storybook and refactoring the Client code is as follows:

1. Duplicate component code to Storybook repo
2. Publish completed components to NPM
3. Remove the original component code from the Client and import via NPM

### Positive Consequences

### Negative consequences

Caveat: If more than one person is working on the Storybook and DPE Client, they'll need to sync up to ensure that details in code refactors are not lost due to overlapping work.

If possible, also avoid having people working simultaneously on a component that consumes / is consumed by another component (i.e., one person working on a card component and another person working on a list component that consumes card components).

## Pros and Cons of the Options

### Option 1: Publish components to NPM from the Client and consume via Storybook

This workflow would mean that we would need to be refactoring code in the client before publishing individual components to NPM. To modify the components in the Storybook, we would need to re-publish to NPM from the client. This is gross.

### Option 2: Publish components to NPM from the Storybook and refactor to consume in the Client

Although this workflow means we are essentially copy-pasting code over from the Client repo to the Storybook, it allows us to:

- Refactor component code while previewing the Storybook locally
- Reflect changes to the code in the Client by refactoring to import components from NPM

This is a more sensible workflow than option one.

### Option 3: Same repo for both Storybook and Client

We didn't discuss this option in detail — mainly because it would likely introduce too many moving parts to the same repo.

## Links

N/A
