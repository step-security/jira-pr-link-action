import {PullRequestEvent} from '@octokit/webhooks-types'

export const pr: PullRequestEvent = {
  action: 'opened',
  number: 2,
  pull_request: {
    auto_merge: null,
    active_lock_reason: null,
    url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/pulls/2',
    id: 279147437,
    node_id: 'MDExOlB1bGxSZXF1ZXN0Mjc5MTQ3NDM3',
    html_url: 'https://github.com/step-security/jira-pr-link-action/pull/2',
    diff_url:
      'https://github.com/step-security/jira-pr-link-action/pull/2.diff',
    patch_url:
      'https://github.com/step-security/jira-pr-link-action/pull/2.patch',
    issue_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/issues/2',
    number: 2,
    state: 'open',
    locked: false,
    title: 'Update the README with new information.',
    user: {
      login: 'step-security',
      id: 21031067,
      node_id: 'MDQ6VXNlcjIxMDMxMDY3',
      avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/step-security',
      html_url: 'https://github.com/step-security',
      followers_url: 'https://api.github.com/users/step-security/followers',
      following_url:
        'https://api.github.com/users/step-security/following{/other_user}',
      gists_url: 'https://api.github.com/users/step-security/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/step-security/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/step-security/subscriptions',
      organizations_url: 'https://api.github.com/users/step-security/orgs',
      repos_url: 'https://api.github.com/users/step-security/repos',
      events_url: 'https://api.github.com/users/step-security/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/step-security/received_events',
      type: 'User',
      site_admin: false
    },
    body: 'This is a pretty simple change that we need to pull into master.',
    created_at: '2019-05-15T15:20:33Z',
    updated_at: '2019-05-15T15:20:33Z',
    closed_at: null,
    merged_at: null,
    merge_commit_sha: null,
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    requested_teams: [],
    labels: [],
    milestone: null,
    commits_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/pulls/2/commits',
    review_comments_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/pulls/2/comments',
    review_comment_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/pulls/comments{/number}',
    comments_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/issues/2/comments',
    statuses_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/statuses/ec26c3e57ca3a959ca5aad62de7213c562f8c821',
    head: {
      label: 'step-security:changes',
      ref: 'changes',
      sha: 'ec26c3e57ca3a959ca5aad62de7213c562f8c821',
      user: {
        login: 'step-security',
        id: 21031067,
        node_id: 'MDQ6VXNlcjIxMDMxMDY3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/step-security',
        html_url: 'https://github.com/step-security',
        followers_url: 'https://api.github.com/users/step-security/followers',
        following_url:
          'https://api.github.com/users/step-security/following{/other_user}',
        gists_url: 'https://api.github.com/users/step-security/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/step-security/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/step-security/subscriptions',
        organizations_url: 'https://api.github.com/users/step-security/orgs',
        repos_url: 'https://api.github.com/users/step-security/repos',
        events_url:
          'https://api.github.com/users/step-security/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/step-security/received_events',
        type: 'User',
        site_admin: false
      },
      repo: {
        id: 186853002,
        node_id: 'MDEwOlJlcG9zaXRvcnkxODY4NTMwMDI=',
        name: 'jira-pr-link-action',
        full_name: 'step-security/jira-pr-link-action',
        private: false,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        custom_properties: {},
        owner: {
          login: 'step-security',
          id: 21031067,
          node_id: 'MDQ6VXNlcjIxMDMxMDY3',
          avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/step-security',
          html_url: 'https://github.com/step-security',
          followers_url: 'https://api.github.com/users/step-security/followers',
          following_url:
            'https://api.github.com/users/step-security/following{/other_user}',
          gists_url:
            'https://api.github.com/users/step-security/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/step-security/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/step-security/subscriptions',
          organizations_url: 'https://api.github.com/users/step-security/orgs',
          repos_url: 'https://api.github.com/users/step-security/repos',
          events_url:
            'https://api.github.com/users/step-security/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/step-security/received_events',
          type: 'User',
          site_admin: false
        },
        html_url: 'https://github.com/step-security/jira-pr-link-action',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/step-security/jira-pr-link-action',
        forks_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/forks',
        keys_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/teams',
        hooks_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/hooks',
        issue_events_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/events',
        assignees_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/tags',
        blobs_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/languages',
        stargazers_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/stargazers',
        contributors_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/contributors',
        subscribers_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/subscribers',
        subscription_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/subscription',
        commits_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/merges',
        archive_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/downloads',
        issues_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/labels{/name}',
        releases_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/deployments',
        created_at: '2019-05-15T15:19:25Z',
        updated_at: '2019-05-15T15:19:27Z',
        pushed_at: '2019-05-15T15:20:32Z',
        git_url: 'git://github.com/step-security/jira-pr-link-action.git',
        ssh_url: 'git@github.com:step-security/jira-pr-link-action.git',
        clone_url: 'https://github.com/step-security/jira-pr-link-action.git',
        svn_url: 'https://github.com/step-security/jira-pr-link-action',
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2,
        license: null,
        forks: 0,
        open_issues: 2,
        watchers: 0,
        default_branch: 'master',
        allow_squash_merge: true,
        allow_merge_commit: true,
        allow_rebase_merge: true,
        delete_branch_on_merge: false
      }
    },
    base: {
      label: 'step-security:master',
      ref: 'master',
      sha: 'f95f852bd8fca8fcc58a9a2d6c842781e32a215e',
      user: {
        login: 'step-security',
        id: 21031067,
        node_id: 'MDQ6VXNlcjIxMDMxMDY3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/step-security',
        html_url: 'https://github.com/step-security',
        followers_url: 'https://api.github.com/users/step-security/followers',
        following_url:
          'https://api.github.com/users/step-security/following{/other_user}',
        gists_url: 'https://api.github.com/users/step-security/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/step-security/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/step-security/subscriptions',
        organizations_url: 'https://api.github.com/users/step-security/orgs',
        repos_url: 'https://api.github.com/users/step-security/repos',
        events_url:
          'https://api.github.com/users/step-security/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/step-security/received_events',
        type: 'User',
        site_admin: false
      },
      repo: {
        id: 186853002,
        node_id: 'MDEwOlJlcG9zaXRvcnkxODY4NTMwMDI=',
        name: 'jira-pr-link-action',
        full_name: 'step-security/jira-pr-link-action',
        private: false,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: 'public',
        custom_properties: {},
        owner: {
          login: 'step-security',
          id: 21031067,
          node_id: 'MDQ6VXNlcjIxMDMxMDY3',
          avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/step-security',
          html_url: 'https://github.com/step-security',
          followers_url: 'https://api.github.com/users/step-security/followers',
          following_url:
            'https://api.github.com/users/step-security/following{/other_user}',
          gists_url:
            'https://api.github.com/users/step-security/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/step-security/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/step-security/subscriptions',
          organizations_url: 'https://api.github.com/users/step-security/orgs',
          repos_url: 'https://api.github.com/users/step-security/repos',
          events_url:
            'https://api.github.com/users/step-security/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/step-security/received_events',
          type: 'User',
          site_admin: false
        },
        html_url: 'https://github.com/step-security/jira-pr-link-action',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/step-security/jira-pr-link-action',
        forks_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/forks',
        keys_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/teams',
        hooks_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/hooks',
        issue_events_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/events',
        assignees_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/tags',
        blobs_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/languages',
        stargazers_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/stargazers',
        contributors_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/contributors',
        subscribers_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/subscribers',
        subscription_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/subscription',
        commits_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/merges',
        archive_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/downloads',
        issues_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/labels{/name}',
        releases_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/step-security/jira-pr-link-action/deployments',
        created_at: '2019-05-15T15:19:25Z',
        updated_at: '2019-05-15T15:19:27Z',
        pushed_at: '2019-05-15T15:20:32Z',
        git_url: 'git://github.com/step-security/jira-pr-link-action.git',
        ssh_url: 'git@github.com:step-security/jira-pr-link-action.git',
        clone_url: 'https://github.com/step-security/jira-pr-link-action.git',
        svn_url: 'https://github.com/step-security/jira-pr-link-action',
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2,
        license: null,
        forks: 0,
        open_issues: 2,
        watchers: 0,
        default_branch: 'master',
        allow_squash_merge: true,
        allow_merge_commit: true,
        allow_rebase_merge: true,
        delete_branch_on_merge: false
      }
    },
    _links: {
      self: {
        href:
          'https://api.github.com/repos/step-security/jira-pr-link-action/pulls/2'
      },
      html: {
        href: 'https://github.com/step-security/jira-pr-link-action/pull/2'
      },
      issue: {
        href:
          'https://api.github.com/repos/step-security/jira-pr-link-action/issues/2'
      },
      comments: {
        href:
          'https://api.github.com/repos/step-security/jira-pr-link-action/issues/2/comments'
      },
      review_comments: {
        href:
          'https://api.github.com/repos/step-security/jira-pr-link-action/pulls/2/comments'
      },
      review_comment: {
        href:
          'https://api.github.com/repos/step-security/jira-pr-link-action/pulls/comments{/number}'
      },
      commits: {
        href:
          'https://api.github.com/repos/step-security/jira-pr-link-action/pulls/2/commits'
      },
      statuses: {
        href:
          'https://api.github.com/repos/step-security/jira-pr-link-action/statuses/ec26c3e57ca3a959ca5aad62de7213c562f8c821'
      }
    },
    author_association: 'OWNER',
    draft: false,
    merged: false,
    mergeable: null,
    rebaseable: null,
    mergeable_state: 'unknown',
    merged_by: null,
    comments: 0,
    review_comments: 0,
    maintainer_can_modify: false,
    commits: 1,
    additions: 1,
    deletions: 1,
    changed_files: 1
  },
  repository: {
    id: 186853002,
    node_id: 'MDEwOlJlcG9zaXRvcnkxODY4NTMwMDI=',
    name: 'jira-pr-link-action',
    full_name: 'step-security/jira-pr-link-action',
    private: false,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    custom_properties: {},
    owner: {
      login: 'step-security',
      id: 21031067,
      node_id: 'MDQ6VXNlcjIxMDMxMDY3',
      avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/step-security',
      html_url: 'https://github.com/step-security',
      followers_url: 'https://api.github.com/users/step-security/followers',
      following_url:
        'https://api.github.com/users/step-security/following{/other_user}',
      gists_url: 'https://api.github.com/users/step-security/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/step-security/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/step-security/subscriptions',
      organizations_url: 'https://api.github.com/users/step-security/orgs',
      repos_url: 'https://api.github.com/users/step-security/repos',
      events_url: 'https://api.github.com/users/step-security/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/step-security/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/step-security/jira-pr-link-action',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/step-security/jira-pr-link-action',
    forks_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/forks',
    keys_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/teams',
    hooks_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/hooks',
    issue_events_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/events',
    assignees_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/tags',
    blobs_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/languages',
    stargazers_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/stargazers',
    contributors_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/contributors',
    subscribers_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/subscribers',
    subscription_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/subscription',
    commits_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/merges',
    archive_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/downloads',
    issues_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/labels{/name}',
    releases_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/step-security/jira-pr-link-action/deployments',
    created_at: '2019-05-15T15:19:25Z',
    updated_at: '2019-05-15T15:19:27Z',
    pushed_at: '2019-05-15T15:20:32Z',
    git_url: 'git://github.com/step-security/jira-pr-link-action.git',
    ssh_url: 'git@github.com:step-security/jira-pr-link-action.git',
    clone_url: 'https://github.com/step-security/jira-pr-link-action.git',
    svn_url: 'https://github.com/step-security/jira-pr-link-action',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: null,
    forks: 0,
    open_issues: 2,
    watchers: 0,
    default_branch: 'master'
  },
  sender: {
    login: 'step-security',
    id: 21031067,
    node_id: 'MDQ6VXNlcjIxMDMxMDY3',
    avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/step-security',
    html_url: 'https://github.com/step-security',
    followers_url: 'https://api.github.com/users/step-security/followers',
    following_url:
      'https://api.github.com/users/step-security/following{/other_user}',
    gists_url: 'https://api.github.com/users/step-security/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/step-security/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/step-security/subscriptions',
    organizations_url: 'https://api.github.com/users/step-security/orgs',
    repos_url: 'https://api.github.com/users/step-security/repos',
    events_url: 'https://api.github.com/users/step-security/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/step-security/received_events',
    type: 'User',
    site_admin: false
  }
}
