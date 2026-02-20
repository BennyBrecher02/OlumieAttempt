export type CfImageUrlInput =
  | { url: string }
  | {
      imageId: string;
      variant?: string;
      accountHash?: string;
    };

export function cfImageUrl(input: CfImageUrlInput): string {
  if ("url" in input) return input.url;

  const accountHash =
    input.accountHash ?? (import.meta.env.PUBLIC_CF_IMAGES_ACCOUNT_HASH as string | undefined);

  if (!accountHash) {
    throw new Error(
      "Missing Cloudflare Images account hash. Set PUBLIC_CF_IMAGES_ACCOUNT_HASH or pass accountHash.",
    );
  }

  const variant = input.variant ?? "public";
  return `https://imagedelivery.net/${accountHash}/${input.imageId}/${variant}`;
}

/**
 * Convenience helper: treat an existing URL/path as-is, or build a Cloudflare
 * Images delivery URL from an imageId if configured.
 */
export function resolveImageUrl(opts: {
  url?: string;
  imageId?: string;
  variant?: string;
}): string | undefined {
  if (opts.url) return opts.url;
  if (!opts.imageId) return undefined;

  try {
    return cfImageUrl({ imageId: opts.imageId, variant: opts.variant });
  } catch {
    return undefined;
  }
}

