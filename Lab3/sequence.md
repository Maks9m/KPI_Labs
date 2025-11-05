```
sequenceDiagram
    autonumber
    participant A as Artist
    participant S as SpotifySystem
    participant L as Listener

    loop until validates
        alt [track isn't valid]
            A->>S: Create release
            S->>S: Validate track
            S-->>A: Error list
            A->>S: Correct data
        else [track is valid]
            A->>S: Submit track
        end
    end
    S-->>A: Notification: Track is published

    S-->>L: Notification: New track available
    L->>S: Search/browse track
    S-->>L: Show released track
    L->>S: Play track
    S->>S: Stream audio

    loop
        opt Add/Remove from favorites
            L->>S: Add/Remove track from favorites
            S->>S: Update favorites
        end
        opt Pause/Resume
            L->>S: Pause/Resume streaming
            S->>S: Update playback state
        end
        opt Stop/Continue streaming
            L->>S: Stop/Continue streaming
            S->>S: Update streaming state
        end
    end
    L->>S: End audio stream

    A->>S: Request track analytics
    S-->>A: Return track analytics

    opt Request track takedown
        A->>S: Request takedown
        S->>S: Process takedown
        S-->>A: Notification: Takedown confirmed
        S-->>L: Notification: Track is unavailable
    end

    A->>S: Request update
    loop until validates
        alt [track isn't valid]
            S->>S: Validate update
            S-->>A: Error list
            A->>S: Correct data
        else [track is valid]
            S->>S: Submit update
        end
    end
    S-->>A: Notification: Track is updated
```
```mermaid
sequenceDiagram
    autonumber
    participant A as Artist
    participant S as SpotifySystem
    participant L as Listener

    loop until validates
        alt [track isn't valid]
            A->>S: Create release
            S->>S: Validate track
            S-->>A: Error list
            A->>S: Correct data
        else [track is valid]
            A->>S: Submit track
        end
    end
    S-->>A: Notification: Track is published

    S-->>L: Notification: New track available
    L->>S: Search/browse track
    S-->>L: Show released track
    L->>S: Play track
    S->>S: Stream audio

    loop
        opt Add/Remove from favorites
            L->>S: Add/Remove track from favorites
            S->>S: Update favorites
        end
        opt Pause/Resume
            L->>S: Pause/Resume streaming
            S->>S: Update playback state
        end
        opt Stop/Continue streaming
            L->>S: Stop/Continue streaming
            S->>S: Update streaming state
        end
    end
    L->>S: End audio stream

    A->>S: Request track analytics
    S-->>A: Return track analytics

    opt Request track takedown
        A->>S: Request takedown
        S->>S: Process takedown
        S-->>A: Notification: Takedown confirmed
        S-->>L: Notification: Track is unavailable
    end

    A->>S: Request update
    loop until validates
        alt [track isn't valid]
            S->>S: Validate update
            S-->>A: Error list
            A->>S: Correct data
        else [track is valid]
            S->>S: Submit update
        end
    end
    S-->>A: Notification: Track is updated
  ```
