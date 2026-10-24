import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  Star, 
  GitFork, 
  ExternalLink, 
  RefreshCw, 
  Clock, 
  FolderGit2,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo, initialGithubRepos } from '../data/portfolioData';

function formatRelativeTime(dateString) {
  if (!dateString) return 'Recently';
  const updated = new Date(dateString);
  const now = new Date();
  const diffMs = now - updated;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 30) return `${diffDays}d ago`;
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths === 1) return '1mo ago';
  if (diffMonths < 12) return `${diffMonths}mo ago`;
  return `${updated.toLocaleDateString()}`;
}

export default function GitHubUpdates() {
  const [repos, setRepos] = useState(initialGithubRepos);
  const [loading, setLoading] = useState(false);
  const [lastSynced, setLastSynced] = useState('Just now');

  const fetchLatestRepos = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=8`);
      if (!res.ok) throw new Error('API Rate Limit');
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const filtered = data.filter(r => r.name !== personalInfo.githubUsername).slice(0, 6);
        setRepos(filtered);
        setLastSynced(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }
    } catch (err) {
      setLastSynced('Cached');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestRepos();
  }, []);

  return (
    <div id="repositories" className="mt-20 pt-16 border-t border-zinc-900">
      
      {/* Top Header of GitHub Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Real-Time Codebase</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight flex items-center gap-2.5">
            <span>Latest Repositories</span>
          </h3>
          <p className="text-xs text-zinc-500 font-mono mt-1">
            Synced from{' '}
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white underline"
            >
              github.com/{personalInfo.githubUsername}
            </a>
          </p>
        </div>

        {/* Sync Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-[11px] font-mono text-zinc-600 hidden sm:inline">
            Status: {lastSynced}
          </span>
          <button
            onClick={fetchLatestRepos}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-mono transition-all cursor-pointer disabled:opacity-50"
            title="Sync with GitHub API"
          >
            <RefreshCw size={12} className={loading ? 'animate-spin' : ''} />
            <span>{loading ? 'Syncing...' : 'Sync Live'}</span>
          </button>

          <a
            href={`${personalInfo.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-mono border border-zinc-800 transition-colors"
          >
            <GithubIcon size={13} />
            <span>All 44+ Repos</span>
            <ArrowUpRight size={12} className="text-zinc-500" />
          </a>
        </div>
      </div>

      {/* GitHub Repo Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="p-5 rounded-2xl stealth-card flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm text-white group-hover:text-zinc-200 transition-colors flex items-center gap-2 break-all font-mono"
                >
                  <FolderGit2 size={15} className="text-zinc-500 shrink-0" />
                  <span>{repo.name}</span>
                </a>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-zinc-600 hover:text-white transition-colors shrink-0"
                >
                  <ExternalLink size={13} />
                </a>
              </div>

              <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed mb-4">
                {repo.description || 'Public engineering repository by Saiyam Jain.'}
              </p>
            </div>

            <div>
              <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                {repo.language ? (
                  <span className="text-zinc-300 font-semibold">{repo.language}</span>
                ) : (
                  <span>Code</span>
                )}

                <div className="flex items-center gap-3">
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1 text-amber-400">
                      <Star size={11} className="fill-amber-400" />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1 text-zinc-500">
                      <GitFork size={11} />
                      {repo.forks_count}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-zinc-600">
                    <Clock size={11} />
                    {formatRelativeTime(repo.updated_at)}
                  </span>
                </div>
              </div>

              {repo.homepage && (
                <div className="mt-3 pt-2">
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-mono border border-zinc-800 transition-colors"
                  >
                    <span>Launch Live App</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
