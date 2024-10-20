# Contributing

## Pushing the code

To be able to push the code to github from your devcontainer, you have to setup github authorization through one of the following:

- With SSH (by one of the following two options):

  - By [creating a new SSH-key in your container](#create-a-new-ssh-key-in-devcontainer)
  - By [using the existing SSH-keys](#use-existing-ssh-keys-with-ssh-agent-forwarding-to-devcontainer)

- With [HTTPS](#with-https)

### Create a new SSH-key in devcontainer

- create an ssh key in the container and add to your github profile

  - in vscode terminal run `gh auth login`

    - `? Where do you use GitHub? GitHub.com`
    - `? What is your preferred protocol for Git operations on this host? SSH`
    - `? Generate a new SSH key to add to your GitHub account? Yes`
    - `? Enter a passphrase for your new SSH key (Optional):` (tested without passphrase)
    - `? Title for your SSH key: GitHub CLI` (can be any)
    - `? How would you like to authenticate GitHub CLI? Login with a web browser`
    - `! First copy your one-time code:`
    - `Press Enter to open https://github.com/login/device in your browser...`
    - ```
        ✓ Authentication complete.
        - gh config set -h github.com git_protocol ssh
        ✓ Configured git protocol
        ! Authentication credentials saved in plain text

        ✓ Uploaded the SSH key to your GitHub account: /home/vscode/.ssh/id_ed25519.pub
        ✓ Logged in as <GithubProfileName>
      ```

    - It will both create an ssh-key and upload it to [Github > SSH keys](https://github.com/settings/keys)

- Add ssh key to the container's ssh

  - in vscode terminal run

    ```
    ssh-add ~/.ssh/<your-ssh-key>

    # e.g.:
    # ssh-add ~/.ssh/id_ed25519

    # Output: Identity added: /home/vscode/.ssh/id_ed25519 (/home/vscode/.ssh/id_ed25519)
    ```

- `git push`

---

### Use existing SSH-keys with SSH-agent forwarding to devcontainer

See [Sharing your Git Credentials with your container](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials)

- use existing ssh-keys with ssh [agent forwarding](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials#_using-ssh-keys) (skip this step, if you're creating a new SSH key from the step above) - See [ssh-agent-forwarding docs](https://www.ssh.com/academy/ssh/agent#ssh-agent-forwarding) - Enable [X11 forwarding and agent forwarding](https://www.ssh.com/academy/ssh/config) - in your `/etc/ssh/ssh_config` set options - `ForwardAgent yes` - `ForwardX11 yes` - **`IMPORTANT`**: Consider possible [security implications when forwarding ssh agents](https://www.ssh.com/academy/ssh/config)
- Add ssh key to the container's ssh

  - in vscode terminal run

    ```
    ssh-add ~/.ssh/<your-ssh-key>

    # e.g.:
    # ssh-add ~/.ssh/id_ed25519

    # Output: Identity added: /home/vscode/.ssh/id_ed25519 (/home/vscode/.ssh/id_ed25519)
    ```

- `git push`

---

### With HTTPS

- with HTTPS
