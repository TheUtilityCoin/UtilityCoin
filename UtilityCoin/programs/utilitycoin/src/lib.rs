use anchor_lang::prelude::*;
use anchor_spl::token::{Mint, Token};

declare_id!("YOUR_PROGRAM_ID_HERE");

#[program]
pub mod utilitycoin {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,
    #[account(init, payer = payer, mint::decimals = 9, mint::authority = payer)]
    pub mint: Account<'info, Mint>,
    pub token_program: Program<'info, Token>,
    pub rent: Sysvar<'info, Rent>,
    pub system_program: Program<'info, System>,
}