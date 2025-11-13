# Listening to a track process

sequenceDiagram
    actor Listener
    participant UI
    participant Authorization
    participant Playback Manager
    participant Cache
    participant DB

    Listener->>+UI: Play a track
    UI->>+Authorization: Check access
    Authorization-->>-UI: Access granted

    UI->>+Playback Manager: Request playback(trackID)
    Playback Manager->>+Cache: Get track(trackID)

    alt Cache Hit
        Cache-->>Playback Manager: Return track data
    else Cache Miss
        Cache-->>-Playback Manager: Not found
        Playback Manager->>+DB: Fetch track(trackID)
        DB-->>-Playback Manager: Return track data
        Playback Manager->>Cache: Store track(trackID, data)
    end

    Playback Manager-->>-UI: Stream track data
    UI-->>-Listener: Track playing

```mermaid
sequenceDiagram
    actor Listener
    participant UI
    participant Authorization
    participant Playback Manager
    participant Cache
    participant DB

    Listener->>+UI: Play a track
    UI->>+Authorization: Check access
    Authorization-->>-UI: Access granted

    UI->>+Playback Manager: Request playback(trackID)
    Playback Manager->>+Cache: Get track(trackID)

    alt Cache Hit
        Cache-->>Playback Manager: Return track data
    else Cache Miss
        Cache-->>-Playback Manager: Not found
        Playback Manager->>+DB: Fetch track(trackID)
        DB-->>-Playback Manager: Return track data
        Playback Manager->>Cache: Store track(trackID, data)
    end

    Playback Manager-->>-UI: Stream track data
    UI-->>-Listener: Track playing
    ```
