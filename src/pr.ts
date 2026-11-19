import * as core from '@actions/core'
import {PullRequestEvent} from '@octokit/webhooks-types'
import {Options} from './options'

/**
 * Pull requests are linked automatically if the issue key is included in the pull request's title
 * @param event github pull request
 * @param project jira project, can be regex
 * @returns true if valid link to jira
 */
export function validate(event: PullRequestEvent, options: Options): boolean {
  const {project} = options
  let re: RegExp
  try {
    re = RegExp(`^(?:${project})-[0-9]+`)
  } catch (error) {
    throw new Error(
      `Invalid project pattern '${project}': ${(error as Error).message}`
    )
  }

  core.info('author ' + event.pull_request.user.login.toLowerCase())
  core.info('title ' + event.pull_request.title)

  for (const author of options.ignoreAuthor) {
    if (event.pull_request.user.login.toLowerCase() == author.toLowerCase()) {
      return true
    }
  }

  if (event.pull_request.title.match(re)) {
    return true
  }

  return false
}
