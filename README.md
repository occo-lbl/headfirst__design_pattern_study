# headfirst__design_pattern_study
「Head Firstデザインパターン 第2版」のソースをTypescriptで書き直すためのリポジトリです。

## gitの運用方針
 - パターンの実装は、developerから分岐したfeatureブランチで行うこと。
 - 1つのパターンが実装できたら、developerにマージする。
 - すべてのパターンの実装が完了したら、mainにマージする。

## マージの方針
 - developer → master  : Create a merge commit
 - feature → developer : Squash and merge
 