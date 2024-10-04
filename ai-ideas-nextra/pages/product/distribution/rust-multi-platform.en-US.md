# Rust Multi Platform Distribution

https://doc.rust-lang.org/stable/cargo/index.html

Example: [monolith](https://crates.io/crates/monolith/2.8.3) crate

---

Using Cargo (cross-platform)
cargo install monolith

Via Homebrew (macOS and GNU/Linux)
brew install monolith

Via Chocolatey (Windows)
choco install monolith

Via Scoop (Windows)
scoop install main/monolith

Via Winget (Windows)
winget install --id=Y2Z.Monolith  -e

Via MacPorts (macOS)
sudo port install monolith

Using Snapcraft (GNU/Linux)
snap install monolith

Using Guix (GNU/Linux)
guix install monolith

Using NixPkgs
nix-env -iA nixpkgs.monolith

Using Flox
flox install monolith

Using Pacman (Arch Linux)
pacman -S monolith

Using aports (Alpine Linux)
apk add monolith

Using XBPS Package Manager (Void Linux)
xbps-install -S monolith

Using FreeBSD packages (FreeBSD)
pkg install monolith

Using FreeBSD ports (FreeBSD)
cd /usr/ports/www/monolith/
make install clean

Using pkgsrc (NetBSD, OpenBSD, Haiku, etc)
cd /usr/pkgsrc/www/monolith
make install clean

Using containers
docker build -t y2z/monolith .
sudo install -b dist/run-in-container.sh /usr/local/bin/monolith

From source
Dependencies: libssl, cargo

Install cargo (GNU/Linux)
git clone https://github.com/Y2Z/monolith.git
cd monolith
make install

Using pre-built binaries (Windows, ARM-based devices, etc)
Every release contains pre-built binaries for Windows, GNU/Linux, as well as platforms with non-standard CPU architecture.

---

You can distribute a package built with Cargo, Rust's package manager, to a wide variety of operating systems as long as they support Rust and its dependencies. Cargo itself is platform-independent, but the compiled binaries or libraries from Rust code can be specific to target platforms.

Here’s a general list of OSes where Rust (and by extension, Cargo-built packages) can be distributed:

- Linux: Most distributions such as Ubuntu, Fedora, Debian, CentOS, and Arch support Rust, and you can easily distribute binaries or libraries on these platforms.

- macOS: Rust has native support for macOS. You can distribute packages for macOS on different versions, including Intel and Apple Silicon (M1/M2) architectures.

- Windows: Cargo packages can be distributed for Windows systems. Rust supports both MSVC (Microsoft Visual Studio) and GNU toolchains on Windows, so you can distribute packages for either.

- FreeBSD/NetBSD/OpenBSD: Rust supports several BSD systems, allowing for package distribution on these platforms.

- Other Unix-like systems: Cargo and Rust support several Unix-like systems such as Solaris or illumos, although support may be less common.

- WASM (WebAssembly): You can compile Cargo packages to WebAssembly (WASM) and distribute them for use in web browsers or other WASM runtimes.

Rust’s cross-compilation feature allows you to build packages for other platforms from a single development environment, meaning you can compile packages for different target architectures, including ARM (for Raspberry Pi, mobile platforms, etc.).

If you want to distribute the package as a library, it depends on the language or platform consuming the Rust code, but the OS list remains largely the same.